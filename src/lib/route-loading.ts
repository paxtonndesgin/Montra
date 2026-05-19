export const ROUTE_LOADING_START_EVENT = 'montra:route-loading-start';

function normalizePath(path: string) {
  const [withoutHash] = path.split('#');
  const [withoutQuery] = withoutHash.split('?');

  if (!withoutQuery || withoutQuery === '/') {
    return '/';
  }

  return withoutQuery.endsWith('/') ? withoutQuery.slice(0, -1) : withoutQuery;
}

function isInternalHref(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}

export function shouldHandleRouteLoadingClick(event: Pick<MouseEvent, 'button' | 'metaKey' | 'ctrlKey' | 'shiftKey' | 'altKey' | 'defaultPrevented'>) {
  return !event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}

export function triggerRouteLoading(href: string, currentPathname?: string) {
  if (typeof window === 'undefined' || !isInternalHref(href)) {
    return false;
  }

  if (currentPathname && normalizePath(href) === normalizePath(currentPathname)) {
    return false;
  }

  window.dispatchEvent(new CustomEvent(ROUTE_LOADING_START_EVENT));
  return true;
}