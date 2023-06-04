import "./NavBar.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { NavLink, Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("open");
    setOpen(!open);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to={"/"}>
            <h1>CineVerse</h1>
          </Link>
        </div>
        <div className="openMenu" onClick={handleMenuClick}>
          <i className="fa fa-bars" style={{ color: "#66fcf1" }} />
        </div>
        <ul className={`menu ${open ? "open" : ""}`}>
          <li>
            <NavLink to={"/popular"} activeClassName={"active"}>
              <h4>Popular</h4>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/upcoming'}><h4>Upcoming</h4></NavLink>
          </li>
          <li>
            <NavLink to={'/top-rated'}><h4>Top Rated</h4></NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
