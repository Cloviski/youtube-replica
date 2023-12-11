import axios from "axios";

const api = axios.create({
  baseURL: "https://youtube-replica-green.vercel.app",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Context-Type": "application/json",
  },
});

export default api;
