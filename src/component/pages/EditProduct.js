import React, { useContext } from "react";
import { useHistory, useParams } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import Form from "../common/Form";

function EditProduct() {
  const { update, get } = useContext(ProductContext);
  const history = useHistory();
  const param = useParams();
  const productId = param.id;
  return (
    <div className="container ">
      <button
        onClick={() => history.push("/admin")}
        className="btn btn-sm btn-outline-primary mt-4"
      >
        Back
      </button>
      <Form
        initialValues={get(productId)}
        title={"Edit Product"}
        onSubmit={(values) => {
          update(productId, values);
          console.log(values);
          history.push("/admin");
        }}
      />
    </div>
  );
}

export default EditProduct;
