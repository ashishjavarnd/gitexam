import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import product from "../redux/services/product";
import { toast } from "react-toastify";

const Addproduct = () => {
  const [productName, setProductName] = useState(null);
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [vendor, setVendor] = useState(null);
  const [waranty, setWaranty] = useState(null);

  const navigate = useNavigate();
  const { productId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = { productName, price, quantity, vendor, waranty };
    if (productId) {
      product.edit({ productId, params }).then((res) => {
        if (res.data.status === "success") {
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/product-list");
        } else {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
    } else {
      product.add(params).then((res) => {
        if (res.data.status == "success") {
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/product-list");
        } else {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
    }
  };

  useEffect(() => {
    if (productId) {
      product.getOne(productId).then((res) => {
        if (res.data.status === "success") {
          console.log(res.data.data);
          setProductName(res.data.data.productName);
          setPrice(res.data.data.price);
          setVendor(res.data.data.vendor);
          setQuantity(res.data.data.quantity);
          setWaranty(res.data.data.waranty);
        } else {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
    }
  }, []);
  return (
    <>
      {!localStorage.token ? (
        <Navigate to="/" />
      ) : (
        <div class="col d-flex justify-content-center">
          <div class="m-auto">
            <form className="mx-3 my-2" onSubmit={(e) => handleSubmit(e)}>
              <h1 className="h2 mt-2 mb-3 fw-normal">
                Add product to inventory
              </h1>
              <div class="mb-4">
                <label class="form-label">Product Name</label>
                <input
                  type="text"
                  class="form-control"
                  value={productName ? productName : ""}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label class="form-label">Price</label>
                <input
                  type="text"
                  class="form-control"
                  value={price ? price : ""}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label class="form-label">Qunatity in Stock</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={quantity ? quantity : ""}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  <option selected>---------</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30, 40, 50, 100].map(
                    (ele) => (
                      <option key={ele} value={ele}>
                        {ele}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div class="mb-4">
                <label class="form-label">vendor</label>
                <input
                  type="text"
                  class="form-control"
                  value={vendor ? vendor : ""}
                  onChange={(e) => setVendor(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label class="form-label">Waranty</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={waranty ? waranty : ""}
                  onChange={(e) => setWaranty(e.target.value)}
                >
                  <option selected>---------</option>
                  {[1, 2, 3, 4, 5, 6].map((ele) => (
                    <option key={ele} value={ele}>
                      {ele}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Addproduct;
