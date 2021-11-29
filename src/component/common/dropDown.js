import NavLink from "./NavLink";

function Dropdown({ value, link, index }) {
  return value ? (
    <li key={index}>
      <NavLink classes="dropdown-item" path={link}>
        {value}
      </NavLink>
    </li>
  ) : (
    <li key={index}>
      <hr className="dropdown-divider" />
    </li>
  );
}

export default Dropdown;
