import http from "./http";

const product = {
  add: (data) => http.post("/add_product", data),
  list: (param) => http.get("/get_product_list", { params: param }),
  getOne: (data) => http.get(`/get_product_detail/${data}`),
  edit: (param) =>
    http.patch(`/product_update/${param.productId}`, param.params),
  delete: (data) => http.delete(`/product_delete/${data}`),
};

export default product;
