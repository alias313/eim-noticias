"use client";
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const NAV_LINK_SELECTOR = 'a[href^="/"]';

export function useMousedownNavigation() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (event: MouseEvent) => {
      const targetLink = (event.target as HTMLElement).closest(NAV_LINK_SELECTOR) as HTMLAnchorElement | null;
      if (targetLink && targetLink.href) {
        event.preventDefault();

        const url = targetLink.href;
        const currentUrl = window.location.origin + window.location.pathname + window.location.search;

        if (url !== currentUrl) {
          router.push(url);
        }
      }
    };

    container.addEventListener('mousedown', handleMouseDown as EventListener, true);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown as EventListener, true);
    };

  }, [router]); // Re-run effect if router object changes (unlikely, but good practice)

  return containerRef;
}
