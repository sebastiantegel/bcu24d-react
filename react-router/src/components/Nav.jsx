import { NavLink } from "react-router";
import "./../styles/Nav.css";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Hem</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>Om oss</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Kontakt</NavLink>
        </li>
        <li>
          <NavLink to={"/movies"}>Filmer</NavLink>
        </li>
      </ul>
    </nav>
  );
};
