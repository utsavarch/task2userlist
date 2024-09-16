import axios from "axios";

export const baseUrl = "https://jsonplaceholder.typicode.com/";

export const apiCallInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchUsers = async () => {
  try {
    const response = await apiCallInstance.get("users");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
