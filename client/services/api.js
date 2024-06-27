import axios from "axios";


const API_URL = "http://localhost:3000";

export const fetchProducts = async (page,size,sortOrder) => {
  try {
    console.log('page',page,'size',size,'sortOrter',sortOrder);
    const response = await axios.get(`${API_URL}/products?page=${page-1}&size=${size}&sortOrder=${sortOrder}`);
    console.log("fetchProducts", response.data);
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
  const response = axios.get(`${API_URL}/updateStock`, {
    id,
    quantity,
  });
  return response.data;
};
