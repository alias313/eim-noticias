"use client";
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const NAV_LINK_SELECTOR = 'a';

export function useMousedownNavigation() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (event: MouseEvent) => {
      const targetLink = (event.target as HTMLElement).closest(NAV_LINK_SELECTOR) as HTMLAnchorElement | null;

      if (targetLink && targetLink.href) {
        const url = new URL(targetLink.href);
        const isExternal = url.origin !== window.location.origin;

        if (isExternal) {
          // Let the default behavior handle external links
          return;
        }

        event.preventDefault();

        // Handle hash navigation
        if (url.hash) {
          const element = document.querySelector(url.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            return;
          }
        }

        const currentPath = window.location.pathname + window.location.search;

        if (url.pathname + url.search !== currentPath) {
          router.push(url.pathname + url.search);
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
