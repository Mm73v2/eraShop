import axios from "axios";

// Configure the Axios client
const axiosClient = axios.create({
  baseURL: "http://localhost:8080", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
