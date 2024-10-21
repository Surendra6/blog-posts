import axios from "axios";

// Create an Axios instance
const useApiClient = axios.create({
  //baseURL: "https://jsonplaceholder.typicode.com", // Base URL for the API
  baseURL: "https://dummyjson.com/", // Base URL for the API
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Add interceptors here if needed for handling errors globally, adding auth tokens, etc.

export default useApiClient;
