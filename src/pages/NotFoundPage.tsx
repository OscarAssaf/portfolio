import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <section className="mx-auto max-w-xl px-4 py-32 text-center">
      <h1 className="text-4xl font-bold text-white">Page not found</h1>
      <p className="mt-3 text-slate-400">That route doesn&apos;t exist on this site.</p>
      <Link
        to="/"
        className="mt-6 inline-flex rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white"
      >
        Back home
      </Link>
    </section>
  );
}
