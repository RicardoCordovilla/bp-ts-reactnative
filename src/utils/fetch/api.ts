import axios from "axios";

axios.defaults.baseURL = "https://bp-apireto-production.up.railway.app/";
const mainPath = "bp/";
const paths = {
    products: "products",
    users: "users",
}

export const API = {
    getAllProducts: async () => {    
        return await axios.get(mainPath + paths.products);
    },
}

export default API;