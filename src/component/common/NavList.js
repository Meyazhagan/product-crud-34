import classNames from "classnames";
import React from "react";
import Dropdown from "./dropDown";
import NavLink from "./NavLink";

function NavList({ value, link, active, dropdown, index }) {
  let activeList = (
    <li className={classNames("nav-item")} key={index}>
      <NavLink
        classes={classNames("nav-link", { active: active })}
        aria-current="page"
        href={link}
      >
        {value}
      </NavLink>
    </li>
  );

  if (dropdown) {
    activeList = (
      <li className={classNames("nav-item dropdown ")} key={index}>
        <button
          className="nav-link dropdown-toggle btn"
          id="navbarDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {value}
        </button>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {dropdown.map((list, index) => (
            <Dropdown key={index} {...list} index={index} />
          ))}
        </ul>
      </li>
    );
  }
  return activeList;
}

export default NavList;
