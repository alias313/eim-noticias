import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Bienvenido</h1>
      <p className="text-fd-muted-foreground">
        Puedes ir a{' '}
        <Link
          href="/noticias"
          className="text-fd-foreground font-semibold underline"
        >
          /noticias
        </Link>{' '}
        y ver los resumenes de las ocho noticias escogidas.
      </p>
    </main>
  );
}
