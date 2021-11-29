import classNames from "classnames";
import React from "react";
import Dropdown from "./dropDown";

function NavList({ value, link, active, dropdown, index }) {
  let activeLi = (
    <li className={classNames("nav-item")} key={index}>
      <a
        className={classNames("nav-link", { active: active })}
        aria-current="page"
        href={link}
      >
        {value}
      </a>
    </li>
  );

  if (dropdown) {
    activeLi = (
      <li className={classNames("nav-item dropdown ")} key={index}>
        <a
          className={"nav-link dropdown-toggle"}
          id="navbarDropdown"
          href={link}
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {value}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {dropdown.map((list, index) => (
            <Dropdown key={index} {...list} index={index} />
          ))}
        </ul>
      </li>
    );
  }
  return activeLi;
}

export default NavList;
