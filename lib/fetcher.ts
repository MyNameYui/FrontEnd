import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL + "/api/v0/",
});

export { Axios };
