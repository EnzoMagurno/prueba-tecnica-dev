import axios from "axios";


const API_URL = "http://localhost:3000";

export const fetchProducts = async (page,size,sortOrder) => {
  try {
    const response = await axios.get(`${API_URL}/products?page=${page-1}&size=${size}&sortOrder=${sortOrder}`);
    return response.data.products;
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
  try {
    const response = axios.post(`${API_URL}/products/updateStock`, {
      id,
      quantity,
    });
    return response.data;
  } catch (error) {
    res.status(500).json({error})
  }
};