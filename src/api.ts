import axios from "axios";

const api = axios.create({
  baseURL: "https://xr6vvv2l-4000.brs.devtunnels.ms/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Context-Type": "application/json",
  },
});

export default api;
