import React from "react";

import Card from "./common/Card";
import CardWrapper from "./common/CardWrapper";

function Body(props) {
  const { data, handleCart } = props;
  return (
    <CardWrapper>
      {data.map((card, index) => {
        return (
          <Card key={index} data={card} handleCart={handleCart} index={index} />
        );
      })}
    </CardWrapper>
  );
}

export default Body;
