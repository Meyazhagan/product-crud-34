import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

import Card from "../common/Card";
import CardWrapper from "../common/CardWrapper";

function User() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <CardWrapper>
        {products.map((product, index) => {
          return <Card key={index} product={product} />;
        })}
      </CardWrapper>
    </>
  );
}

export default User;
