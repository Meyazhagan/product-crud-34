import React, { Component } from "react";

import NavBar from "./NavBarComponent";
import Head from "./common/Head";

class Header extends Component {
  render() {
    const {
      data: { navBar, cart },
      clearCart,
    } = this.props;
    return (
      <>
        <NavBar navBar={navBar} cart={cart} clearCart={clearCart} />
      </>
    );
  }
}

export default Header;
