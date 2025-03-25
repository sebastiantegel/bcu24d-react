import { Outlet } from "react-router";
import { Nav } from "../components/Nav";

export const Layout = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <section>Section 1</section>
        <section>Section 2</section>
        <section>Section 3</section>
      </footer>
    </>
  );
};
