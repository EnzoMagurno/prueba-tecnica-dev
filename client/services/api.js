import axios from "axios";

// require('dotenv').config()

const API_URL = "http://localhost:3000";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    console.log("fetchProducts", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fecthProducts: ", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products`, {
    id,
  });
  return response.data;
};

export const updateStock = async (id, quantity) => {
  const response = axios.get(`${API_URL}/updateStock`, {
    id,
    quantity,
  });
  return response.data;
};
