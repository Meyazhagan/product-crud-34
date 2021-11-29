import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../../context/AppContext";
import { CartContext } from "../../context/CartContext";
import NavList from "../common/NavList";
import NavWrapper, { ToggleButton } from "../common/NavWrapper";

function NavBar() {
  const { navBar } = useContext(AppContext);
  const { carts } = useContext(CartContext);
  const history = useHistory();
  const navigateToCart = (e) => {
    e.preventDefault();
    history.push("/user/carts");
  };
  return (
    <NavWrapper>
      <ToggleButton />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          {navBar.map((nav, index) => (
            <NavList {...nav} index={index} key={index} />
          ))}
        </ul>
        <button
          onClick={navigateToCart}
          className="btn btn-outline-dark"
          title="Clear Cart"
        >
          <i className="bi-cart-fill me-1"></i>
          Cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">
            {carts.length}
          </span>
        </button>
      </div>
    </NavWrapper>
  );
}

export default NavBar;
