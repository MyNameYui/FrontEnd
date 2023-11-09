import { atom } from "recoil";
const isLogin = atom({
  key: "isLogin",
  default: {
    isLogin: false,
    token: "",
  },
});
export { isLogin };
