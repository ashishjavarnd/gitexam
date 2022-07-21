import { LOGIN, LOGOUT } from "../constants/actionType";
import { loginApi, signupApi } from "../services/auth";

export const login = async (payload) => {
  try {
    let res = await loginApi(payload.params);
    console.log(res);
    if (res.data.status === "success") {
      payload.onSuccess(res.data.message);
      localStorage.clear();
      localStorage.setItem("token", res.data.data.accessToken);
      localStorage.setItem("name", res.data.data.name);
      localStorage.setItem("username", res.data.data.username);

      return {
        type: LOGIN,
        payload: {
          token: res.data.data.accessToken,
          username: res.data.data.username,
          name: res.data.data.user.name,
          email: res.data.data.email,
        },
      };
    } else {
      payload.onError("Something went wrong");
    }
  } catch (error) {}
};

export const signup = async (payload) => {
  try {
    let res = await signupApi(payload.params);
    if (res.data.status === "success") {
      payload.onSuccess(res.data.message);
    } else {
      payload.onError(res.data.message);
    }
  } catch (error) {
    payload.onError("Something went wrong");
  }
};

export const logout = async (payload) => {
  try {
    payload.onSuccess();
    localStorage.clear();
    return {
      type: LOGOUT,
      payload: {},
    };
  } catch (error) {}
};
