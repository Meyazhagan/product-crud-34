import React, { useContext } from "react";
import { useHistory } from "react-router";
import { ProductContext } from "../../context/ProductContext";

function Admin() {
  const { products, remove } = useContext(ProductContext);
  const history = useHistory();
  return (
    <div className="container p-4 mt-4 shadow rounded">
      <button
        onClick={() => history.push("/admin/create-product")}
        className="btn btn-outline-primary btn-sm mb-4"
      >
        Add New Products
      </button>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Old Price</th>
              <th>New Price</th>
              <th>Sale</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.oldPrice}</td>
                <td>{product.newPrice}</td>
                <td>{product.sale ? "Yes" : "No"}</td>
                <td>
                  <button
                    onClick={() =>
                      history.push(`/admin/edit-product/${product.id}`)
                    }
                    className="text-success btn text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => remove(product.id)}
                    className="text-danger btn text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
