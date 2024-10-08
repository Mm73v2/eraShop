import axios from "axios";

// Configure the Axios client
const axiosClient = axios.create({
  baseURL: "https://erashop.runasp.net", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
