import { Outlet } from "react-router";

import { Nav } from "./Nav";

export function Layout() {
  return (
    <div className="min-h-svh bg-background text-ink">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
