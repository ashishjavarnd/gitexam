import http from "./http";

export const loginApi = (params) => {
  return http.post("/login", params);
};

export const signupApi = (params) => {
  return http.post("/signup", params);
};