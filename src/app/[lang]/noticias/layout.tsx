"use client";
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { useMousedownNavigation } from '@/components/useMousedownNavigation';
import { useParams } from 'next/navigation';

export default function Layout({ children }: { children: ReactNode }) {
  const layoutRef = useMousedownNavigation();
  const params = useParams();
  const lang = params.lang as string;

  return (
    <div ref={layoutRef}>
      <DocsLayout
        tree={source.pageTree[lang]}
        {...baseOptions}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
