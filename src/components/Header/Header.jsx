import "./Header.scss";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const location = useLocation();
  const [playgroundActive, setPlaygroundActive] = useState(false);
  useEffect(() => {
    if (
      location.pathname.startsWith("/playground") ||
      location.pathname.startsWith("/employees")
    ) {
      setPlaygroundActive(true);
    } else {
      setPlaygroundActive(false);
    }
  }, [location]);
  return (
    <header className="header">
      <div className="header__logos">
        <NavLink to="/">
          <img
            className="header__logo-image"
            src={logoImage}
            alt="Learnify logo"
          />
        </NavLink>
      </div>
      <div className="header__links">
        <ul className="header__list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "header__item header__item--active" : "header__item"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/playground"
              className={({ isActive }) =>
                isActive || playgroundActive
                  ? "header__item header__item--active"
                  : "header__item"
              }
            >
              Playground
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "header__item header__item--active" : "header__item"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
