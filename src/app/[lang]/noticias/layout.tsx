"use client";
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { use, type ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { useMousedownNavigation } from '@/components/useMousedownNavigation';
import { useParams } from 'next/navigation';
import { DocsLayoutProps } from 'fumadocs-ui/layouts/notebook';
import { GithubInfo } from 'fumadocs-ui/components/github-info';

export default function Layout({ children }: { children: ReactNode }) {
  const layoutRef = useMousedownNavigation();
  const params = useParams();
  const lang = params.lang as string;

  const docsOptions: DocsLayoutProps = {
    ...baseOptions,
    tree: source.pageTree[lang],
    links: [
    ],
  };
  
  return (
    <div ref={layoutRef}>
      <DocsLayout
        {...docsOptions}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
