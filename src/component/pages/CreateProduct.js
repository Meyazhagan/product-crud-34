import React, { useContext } from "react";
import { useHistory } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import Form from "../common/Form";

function CreateProduct() {
  const { create } = useContext(ProductContext);
  const history = useHistory();
  return (
    <div className="container ">
      <button
        onClick={() => history.push("/admin")}
        className="btn btn-sm btn-outline-primary mt-4"
      >
        Back
      </button>
      <Form
        title={"Add Product"}
        initialValues={{
          imgeUrl: "",
          title: "",
          oldPrice: "",
          newPrice: "",
          sale: false,
        }}
        onSubmit={(values) => {
          create(values);
          console.log(values);
          history.push("/admin");
        }}
      />
    </div>
  );
}

export default CreateProduct;
