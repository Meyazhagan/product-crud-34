function NavWrapper({ children }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          Product CRUD
        </a>
        {children}
      </div>
    </nav>
  );
}
const ToggleButton = ({ onClick }) => (
  <button
    className="navbar-toggler"
    type="button"
    onClick={onClick}
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
);

export default NavWrapper;
export { ToggleButton };
