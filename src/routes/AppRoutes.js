import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "../component/app/NavBar";
import Admin from "../component/pages/Admin";
import Cart from "../component/pages/Cart";
import CreateProduct from "../component/pages/CreateProduct";
import EditProduct from "../component/pages/EditProduct";
import User from "../component/pages/User";
import AppProvider from "../context/AppContext";
import CartProvider from "../context/CartContext";
import ProductProvider from "../context/ProductContext";

function AppRoutes() {
  return (
    <AppProvider>
      <ProductProvider>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route path="/user/carts" component={Cart} />
            <Route path="/user" exact component={User} />

            <Route path="/admin/create-product" component={CreateProduct} />
            <Route path="/admin/edit-product/:id" component={EditProduct} />
            <Route path="/admin" exact component={Admin} />
            <Redirect from="/" exact to="/user" />
          </Switch>
        </CartProvider>
      </ProductProvider>
    </AppProvider>
  );
}

export default AppRoutes;