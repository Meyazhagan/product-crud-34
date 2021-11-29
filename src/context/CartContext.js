import React, { createContext, useContext, useEffect, useState } from "react";
import { CART, updateItem } from "../services/LocalStoage";
import { ProductContext } from "./ProductContext";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [carts, setCarts] = useState([]);
  const { products, update } = useContext(ProductContext);
  const getInCart = () => {
    return products.filter((p) => p.inCart);
  };

  const getAll = async () => {
    const InitCarts = getInCart(products);
    updateItem(CART, InitCarts);
    setCarts(InitCarts);
  };

  const handleCart = (product) => {
    const newCarts = [...carts];
    const index = carts.findIndex((c) => c.id === product.id);
    if (index === -1) {
      update(product.id, { inCart: true }, "Added to Cart");
      newCarts.push(product);
    } else {
      update(product.id, { inCart: false }, "Removed From Cart");
      newCarts.splice(index, 1);
    }
    setCarts(newCarts);
    updateItem(CART, newCarts);
  };

  useEffect(
    () => {
      getAll();
    },
    // eslint-disable-next-line
    [products]
  );
  return (
    <CartContext.Provider value={{ carts, getAll, handleCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
