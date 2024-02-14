import axios from "axios";

const baseURL = "http://localhost:8081/api/";

const axiosClient = axios.create({
  baseURL: baseURL
});

export default axiosClient;
