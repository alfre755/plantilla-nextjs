import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <div className="flex-column min-h-screen items-center justify-center bg-zinc-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <header>
        <Navbar />
      </header>
      <main className="w-full max-w-4xl rounded-2xl border border-zinc-200 bg-white p-10 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Bienvenido a Plantilla Next.js
          </h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">
            Inicio rápido con Tailwind, Drizzle y autenticación lista para
            producir.
          </p>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-3">
          <article className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <h2 className="font-semibold">Rápido</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              Next.js + ISR + Server Components.
            </p>
          </article>
          <article className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <h2 className="font-semibold">Escalable</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              Drizzle ORM + PostgreSQL + migraciones.
            </p>
          </article>
          <article className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <h2 className="font-semibold">U</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              Componentes shadcn/ui personalizables.
            </p>
          </article>
        </section>

        <footer className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="login"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-500"
          >
            Ir al dashboard
          </a>
          <a
            href="/docs"
            className="rounded-lg border border-zinc-300 px-5 py-2 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Documentación
          </a>
        </footer>
      </main>
    </div>
  );
}
