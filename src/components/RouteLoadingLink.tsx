"use client";

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { shouldHandleRouteLoadingClick, triggerRouteLoading } from '@/lib/route-loading';

type RouteLoadingLinkProps = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function resolveHref(href: LinkProps['href']) {
  if (typeof href === 'string') {
    return href;
  }

  if ('pathname' in href && typeof href.pathname === 'string') {
    return href.pathname;
  }

  return '';
}

const RouteLoadingLink = React.forwardRef<HTMLAnchorElement, RouteLoadingLinkProps>(function RouteLoadingLink(
  { href, onClick, prefetch = false, ...props },
  ref,
) {
  const pathname = usePathname();
  const resolvedHref = resolveHref(href);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (!shouldHandleRouteLoadingClick(event)) {
      return;
    }

    triggerRouteLoading(resolvedHref, pathname);
  };

  return <Link ref={ref} href={href} prefetch={prefetch} onClick={handleClick} {...props} />;
});

export default RouteLoadingLink;