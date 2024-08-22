import axios from "axios";
import { Product } from "../../types/types";

axios.defaults.baseURL = "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["authorId"] = "1234";

const mainPath = "bp/";
const paths = {
    products: "products",
}
const API = {
    getAllProducts: async () => {
        try {
            const response = await axios.get(mainPath + paths.products);
            return response.data;
        } catch (error) {
            return error;
        }
    },
    verifyProductExist: async (productId: string) => {
        try {
            const response = await axios.get(mainPath + paths.products + "/" + productId);
            return response.data;
        } catch (error) {
            return error;
        }
    },
    createProduct: async (product: Product | null) => {
        try {
            const response = await axios.post(mainPath + paths.products, product);
            return response.data;
        } catch (error) {
            return error;
        }
    },
    updateProduct: async (product: Product | null) => {
        try {
            const response = await axios.put(mainPath + paths.products);
            return response.data;
        } catch (error) {
            return error;
        }
    },
    deleteProduct: async (productId: string) => {
        try {
            const response = await axios.delete(mainPath + paths.products + "?id=" + productId);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}

export default API;