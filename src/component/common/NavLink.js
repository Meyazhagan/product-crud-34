import classNames from "classnames";
import React from "react";
import { useHistory } from "react-router";

function NavLink({ path, children, classes }) {
  const history = useHistory();
  const handleClicked = (e) => {
    e.preventDefault();
    path !== "#!" && history.push(path);
  };

  return (
    <button className={classNames("btn", classes)} onClick={handleClicked}>
      {children}
    </button>
  );
}

export default NavLink;
