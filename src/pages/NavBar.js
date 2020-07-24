import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <NavLink to="/about">
          <li>About Page</li>
        </NavLink>

        <NavLink to="/discover">
          <li>Discover Movies</li>
        </NavLink>

        <NavLink to="/home">
          <li>Home Page</li>
        </NavLink>
      </ul>
    </nav>
  );
}
