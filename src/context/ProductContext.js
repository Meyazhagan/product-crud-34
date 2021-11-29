import randomBytes from "randombytes";
import React, { createContext, useEffect, useState } from "react";
import productData from "../data/ProductData.json";
import { PRODUCT, readItem, updateItem } from "../services/LocalStoage";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState(productData);

  const getIndex = (id) => products.findIndex((c) => `${c.id}` === `${id}`);
  const getAll = async () => {
    const value = JSON.parse(readItem(PRODUCT));
    const products = (value?.length > 0 && value) || productData;

    updateItem(PRODUCT, products);
    setProducts(products);
  };
  const get = (id) => {
    const index = getIndex(id);
    console.log(index, products[index]);
    return { ...products[index] };
  };
  const create = (newProduct) => {
    newProduct.id = getId();
    newProduct.inCart = false;
    newProduct.rating = "4.5";
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    updateItem(PRODUCT, newProducts);
  };
  const update = (id, updatedProduct) => {
    const newProducts = [...products];
    const index = getIndex(id);
    newProducts[index] = { ...newProducts[index], ...updatedProduct };
    setProducts(newProducts);
    updateItem(PRODUCT, newProducts);
  };
  const remove = (id) => {
    const newProducts = [...products];
    const index = getIndex(id);
    newProducts.splice(index, 1);
    setProducts(newProducts);
    updateItem(PRODUCT, newProducts);
  };

  useEffect(
    () => {
      getAll();
    },
    // eslint-disable-next-line
    []
  );
  return (
    <ProductContext.Provider
      value={{ products, getAll, get, create, update, remove }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function getId() {
  return randomBytes(5).toString("hex");
}
export default ProductProvider;
