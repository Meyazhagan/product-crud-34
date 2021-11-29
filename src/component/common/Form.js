import { useFormik } from "formik";
import React from "react";
import CheckInput from "./CheckInput";
import Input from "./Input";
import { pick } from "lodash";

function Form({ initialValues, onSubmit, title }) {
  const validate = (values) => {
    const errors = {};
    // if (!values.oldPrice) errors.oldPrice = "Old Price is required";
    // if (!values.sale) errors.sale = " is required";
    if (!values.title) errors.title = "Product Name is required";
    if (!values.newPrice) errors.newPrice = "New Price is required";
    if (!values.imageUrl) errors.imageUrl = "Product Image is required";
    return errors;
  };
  const formik = useFormik({
    initialValues: pick(initialValues, [
      "title",
      "oldPrice",
      "newPrice",
      "sale",
      "imageUrl",
    ]),
    onSubmit,
    validate,
  });
  return (
    <div className="container mt-4 p-4">
      <div className="shadow p-4 rounded-3">
        <h2>{title}</h2>
        <form>
          <Input
            label="Product Picture Link"
            name="imageUrl"
            type="uri"
            onChange={formik.handleChange}
            value={formik.values.imageUrl}
            onBlur={formik.handleBlur}
            error={formik.touched.imageUrl && formik.errors.imageUrl}
          />
          <Input
            label="Product Name"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            onBlur={formik.handleBlur}
            error={formik.touched.title && formik.errors.title}
          />
          <Input
            label="Old Price"
            name="oldPrice"
            onChange={formik.handleChange}
            value={formik.values.oldPrice}
            onBlur={formik.handleBlur}
            error={formik.touched.oldPrice && formik.errors.oldPrice}
          />
          <Input
            label="New Price"
            name="newPrice"
            onChange={formik.handleChange}
            value={formik.values.newPrice}
            onBlur={formik.handleBlur}
            error={formik.touched.newPrice && formik.errors.newPrice}
          />
          <CheckInput
            label="For Sale"
            name="sale"
            onChange={formik.handleChange}
            checked={formik.values.sale}
            onBlur={formik.handleBlur}
            error={formik.touched.sale && formik.errors.sale}
          />
          <div className="d-flex justify-content-center my-4 gap-3">
            <button
              onClick={formik.handleSubmit}
              className="btn btn-sm btn-primary"
            >
              Submit
            </button>
            <button
              onClick={formik.handleReset}
              className="btn btn-sm btn-danger"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
