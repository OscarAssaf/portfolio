import { Outlet } from "react-router";

import { Nav } from "./Nav";

export function Layout() {
  return (
    <div className="min-h-svh bg-background text-ink">
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Oscar Assaf
      </footer>
    </div>
  );
}
