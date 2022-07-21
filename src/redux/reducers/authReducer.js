import { LOGIN, LOGOUT } from "../constants/actionType";
import { loginStateData } from "../constants/auth";

export const loginReducer = (state = loginStateData, action) => {
  let payload = action.payload;
  console.log(payload);
  switch (action.type) {
    case LOGIN:
      return { ...state, ...payload };
    case LOGOUT: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
