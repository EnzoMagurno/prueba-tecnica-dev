import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL

export const fetchProducts = async (page = 1, category = '', sort= '')=>{

    const response = await axios.get(`${process.env.API_URL}/products`,{
        params: {page,category,sort}
    })
    return response.data
}

export const fetchProductById = async (id) =>{
    const response = await axios.get(`${API_URL}/products`,{
        id
    })
    return response.data
}

export const updateStock = async(id, quantity) => {
    const response = axios.get(`${API_URL}/updateStock`,{
        id,quantity
    })
    return response.data
}