import React from "react";
import { NavLink } from "react-router-dom";

function Header({ selected }) {
  const options = ["Home", "Courses", "About"].map((item, index) => (
    <li className="nav-item"  key={`key-${index}`}>
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
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav">{options}</ul>
      </div>
    </nav>
  );
}

export default Header;
