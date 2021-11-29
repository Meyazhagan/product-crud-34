const CART = "cart";
const PRODUCT = "product";

const readItem = (item) => {
  return localStorage.getItem(item);
};
const updateItem = (item, value) => {
  localStorage.setItem(item, JSON.stringify(value));
};
const removeItem = (item, value) => {
  localStorage.setItem(item, JSON.stringify(value));
};

export { CART, PRODUCT, readItem, updateItem, removeItem };
