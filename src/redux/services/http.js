import axios from "axios";
import configureStore from '../store';
let apiUrl = "http://localhost:3600/api";

const http = axios.create({
  baseURL: apiUrl,
  // timeout: 6000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    if (localStorage.token) {
      config.headers.common["x-access-token"] = `${localStorage.token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default http;
