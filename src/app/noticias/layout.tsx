"use client";
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { useMousedownNavigation } from '@/components/useMousedownNavigation';

export default function Layout({ children }: { children: ReactNode }) {
  const layoutRef = useMousedownNavigation();
  return (
    <div ref={layoutRef}>
      <DocsLayout tree={source.pageTree} {...baseOptions}>
        {children}
      </DocsLayout>
    </div>
  );
}
