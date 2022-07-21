import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import product from "../redux/services/product";
import { toast } from "react-toastify";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const fetchProductList = () => {
    product.list().then((res) => {
      if (res.data.status === "success") {
        setProductList(res.data.data);
      }
    });
  };
  useEffect(() => {
    fetchProductList();
  }, []);

  const handleDelete = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure to delete this Note?")) {
      product
        .delete(id)
        .then((res) => {
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        })
        .then((result) => {
          fetchProductList();
        });
    }
  };
  return (
    <>
      {!localStorage.token ? (
        <Navigate to="/" />
      ) : (
        <div className="container">
          {productList.length > 0 ? (
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Vendor</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Waranty</th>
                  <th scope="col">Operation</th>
                </tr>
              </thead>
              <tbody>
                {productList.length > 0 &&
                  productList.map((ele, index) => (
                    <tr key={ele._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{ele.productName}</td>
                      <td>{ele.price}</td>
                      <td>{ele.vendor}</td>
                      <td>{ele.quantity}</td>
                      <td>{ele.waranty}</td>
                      <td>
                        <Link to={`/edit-product/${ele._id}`}>Edit</Link> |{" "}
                        <Link to="#" onClick={(e) => handleDelete(e, ele._id)}>
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <div>
              <h3 className="col d-flex justify-content-center">
                No Product in Inventory
              </h3>
              <h6 className="col d-flex justify-content-center">
                <Link to="/add-product">Click to add products</Link>
              </h6>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProductList;
