import randomBytes from "randombytes";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ToastMessage from "../component/app/ToastMessage";
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
    const prevProducts = products;
    newProduct.id = getId();
    newProduct.inCart = false;
    newProduct.rating = "2.5";
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    updateItem(PRODUCT, newProducts);
    toast.success(
      <ToastMessage
        onUndo={() => {
          setProducts(prevProducts);
          updateItem(PRODUCT, prevProducts);
        }}
        messaage="New Product Is Created"
      />
    );
  };
  const update = (id, updatedProduct, message) => {
    const prevProducts = products;
    const newProducts = [...products];
    const index = getIndex(id);
    newProducts[index] = { ...newProducts[index], ...updatedProduct };
    setProducts(newProducts);
    updateItem(PRODUCT, newProducts);
    toast.info(
      <ToastMessage
        onUndo={() => {
          setProducts(prevProducts);
          updateItem(PRODUCT, prevProducts);
        }}
        messaage={message || "Product Is Updated"}
      />
    );
  };
  const remove = (id) => {
    const prevProducts = products;
    const newProducts = [...products];
    const index = getIndex(id);
    newProducts.splice(index, 1);
    setProducts(newProducts);
    updateItem(PRODUCT, newProducts);
    toast.error(
      <ToastMessage
        onUndo={() => {
          setProducts(prevProducts);
          updateItem(PRODUCT, prevProducts);
        }}
        messaage="Product Is Removed"
      />
    );
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
