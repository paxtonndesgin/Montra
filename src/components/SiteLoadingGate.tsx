"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '../assets/style/scss/components/SiteLoadingGate.module.scss';
import { ROUTE_LOADING_START_EVENT } from '@/lib/route-loading';

const INITIAL_MINIMUM_VISIBLE_MS = 320;
const ROUTE_MINIMUM_VISIBLE_MS = 260;
const MAXIMUM_WAIT_MS = 2500;
const IMAGE_CHECK_INTERVAL_MS = 80;

type GateRun = {
  id: number;
  mode: 'initial' | 'route';
  startingPathname?: string;
};

function getTrackedImages() {
  const contentRoot = document.querySelector('.siteContent');

  if (!contentRoot) {
    return [];
  }

  const viewportLimit = window.innerHeight * 1.35;

  return Array.from(contentRoot.querySelectorAll('img')).filter((image) => {
    const rect = image.getBoundingClientRect();

    return rect.bottom > 0 && rect.top < viewportLimit;
  });
}

function areTrackedImagesReady() {
  return getTrackedImages().every((image) => image.complete && image.naturalWidth > 0);
}

export default function SiteLoadingGate() {
  const pathname = usePathname();
  const [isWaitingForLoad, setIsWaitingForLoad] = useState(true);
  const [isMinimumElapsed, setIsMinimumElapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [gateRun, setGateRun] = useState<GateRun>({ id: 0, mode: 'initial' });

  useEffect(() => {
    const handleRouteLoadingStart = () => {
      setIsVisible(true);
      setIsWaitingForLoad(true);
      setIsMinimumElapsed(false);
      setGateRun((current) => ({
        id: current.id + 1,
        mode: 'route',
        startingPathname: pathname,
      }));
    };

    window.addEventListener(ROUTE_LOADING_START_EVENT, handleRouteLoadingStart);

    return () => {
      window.removeEventListener(ROUTE_LOADING_START_EVENT, handleRouteLoadingStart);
    };
  }, [pathname]);

  useEffect(() => {
    let cancelled = false;
    let animationFrameId: number | undefined;
    let pollingTimer: number | undefined;
    const minimumVisibleMs = gateRun.mode === 'route' ? ROUTE_MINIMUM_VISIBLE_MS : INITIAL_MINIMUM_VISIBLE_MS;

    const finalize = () => {
      if (!cancelled) {
        setIsWaitingForLoad(false);
      }
    };

    const markInteractive = () => {
      animationFrameId = window.requestAnimationFrame(finalize);
    };

    const minimumTimer = window.setTimeout(() => setIsMinimumElapsed(true), minimumVisibleMs);
    const maximumTimer = window.setTimeout(finalize, MAXIMUM_WAIT_MS);

    if (gateRun.mode === 'route') {
      const waitForRouteContent = () => {
        if (pathname !== gateRun.startingPathname && areTrackedImagesReady()) {
          animationFrameId = window.requestAnimationFrame(() => {
            animationFrameId = window.requestAnimationFrame(finalize);
          });
          return;
        }

        pollingTimer = window.setTimeout(waitForRouteContent, IMAGE_CHECK_INTERVAL_MS);
      };

      pollingTimer = window.setTimeout(waitForRouteContent, IMAGE_CHECK_INTERVAL_MS);
    } else if (document.readyState === 'interactive' || document.readyState === 'complete') {
      markInteractive();
    } else {
      document.addEventListener('DOMContentLoaded', markInteractive, { once: true });
      window.addEventListener('load', markInteractive, { once: true });
    }

    return () => {
      cancelled = true;
      window.clearTimeout(minimumTimer);
      window.clearTimeout(maximumTimer);
      if (pollingTimer) {
        window.clearTimeout(pollingTimer);
      }
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      document.removeEventListener('DOMContentLoaded', markInteractive);
      window.removeEventListener('load', markInteractive);
    };
  }, [gateRun, pathname]);

  useEffect(() => {
    if (!isWaitingForLoad && isMinimumElapsed) {
      const hideTimer = window.setTimeout(() => setIsVisible(false), 260);
      return () => window.clearTimeout(hideTimer);
    }
  }, [isMinimumElapsed, isWaitingForLoad]);

  if (!isVisible) {
    return null;
  }

  const isLeaving = !isWaitingForLoad && isMinimumElapsed;
  const isBlocking = gateRun.mode === 'route' && !isLeaving;

  return (
    <div
      className={`${styles.overlay} ${isBlocking ? styles.overlayBlocking : ''} ${isLeaving ? styles.overlayLeaving : ''}`}
      aria-hidden="true"
    >
      <div className={styles.panel}>
        <div className={styles.spinner} />
        <p className={styles.label}>Loading</p>
      </div>
    </div>
  );
}