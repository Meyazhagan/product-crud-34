import React, { useContext } from "react";
import { useHistory } from "react-router";
import { CartContext } from "../../context/CartContext";
import Card from "../common/Card";
import CardWrapper from "../common/CardWrapper";

function Cart() {
  const { carts } = useContext(CartContext);
  const history = useHistory();
  return (
    <div className="container">
      <button
        className="btn btn-sm btn-outline-primary m-4"
        onClick={() => history.push("/user")}
      >
        Back
      </button>
      <CardWrapper>
        {carts.map((cart, index) => {
          return <Card key={index} product={cart} />;
        })}
      </CardWrapper>
    </div>
  );
}

export default Cart;
