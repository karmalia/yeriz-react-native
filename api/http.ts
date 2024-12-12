import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// Create an Axios instance
const LAPTOP_LOCAL = process.env.EXPO_PUBLIC_LOCAL_API_LAPTOP;
const PC_LOCAL = process.env.EXPO_PUBLIC_LOCAL_API_PC;
const API_PROD = process.env.EXPO_PUBLIC_API_PROD;

const baseURL = process.env.NODE_ENV === "production" ? API_PROD : PC_LOCAL;
console.log("baseURL", baseURL);
const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.error("Response error:", error);

    return Promise.reject(error);
  }
);

export default api;
