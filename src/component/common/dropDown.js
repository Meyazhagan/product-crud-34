function Dropdown({ value, link, index }) {
  return value ? (
    <li key={index}>
      <a className="dropdown-item" href={link}>
        {value}
      </a>
    </li>
  ) : (
    <li key={index}>
      <hr className="dropdown-divider" />
    </li>
  );
}

export default Dropdown;
