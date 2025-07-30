import axios from "axios";

const BASE_URL = "https://dummyjson.com/recipes";

const getAllProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.recipes;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default getAllProducts;
