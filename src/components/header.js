import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ selected }) {
  const options = ["Home", "Courses", "About"].map((item, index) => (
    <li className="nav-item nav-sub-menu-item" key={`key-${index}`}>
      <NavLink
        to={`/${item.toLowerCase()}`}
        activeStyle={{
          fontWeight: "bold",
          color: "#de9479"
        }}
      >
        {item}
      </NavLink>
    </li>
  ));
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav">{options}</ul>
        </div>
      </div>
    </nav>
  );
}
