import React from "react";
import { useHistory } from "react-router";

function NavLink({ path, children }) {
  const history = useHistory();
  const handleClicked = (e) => {
    e.preventDefault();
    path !== "#!" && history.push(path);
  };

  return <a onClick={handleClicked}>{children}</a>;
}

export default NavLink;
