import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { i18n } from '@/lib/i18n';
import type { Translations } from 'fumadocs-ui/i18n';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Noticias EIM',
  description: 'Resumenes de noticias',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
  }
};

const locales = i18n.languages.map(lang => ({
  locale: lang,
  // Provide more descriptive names if desired
  name: lang === 'es' ? 'Español' : lang.toUpperCase()
}));

const esTranslations: Partial<Translations> = {
  toc: "En esta página",
  search: "Buscar documentos",
  nextPage: "Siguiente página",
  previousPage: "Página anterior",
  chooseLanguage: "Elegir idioma",
};

const translations = {
  es: esTranslations,
};

export default async function Layout({ 
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  console.log("Current language:", params);
  console.log("Selected translations:", translations[lang as keyof typeof translations]);
  return (
    <RootProvider
      theme={{
        defaultTheme: 'light',
      }}
      i18n={{
        locale: lang,
        locales: locales,
        translations: translations[lang as keyof typeof translations]
      }}
    >
      {children}
    </RootProvider>
  );
}
