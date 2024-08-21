import { useEffect, useState } from "react";
import API from "../fetch/api";
// import { ProductsList } from "../../types/types";

interface Product {
    id: number
    name: string
    desription: string
    logo: string
    date_release: string
    date_revision: string
}

type ProductsList = Product[]


export const useGet = () => {
    const [data, setData] = useState<ProductsList>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [fetch, setFetch] = useState<boolean>(false);


    useEffect(() => {
        API.getAllProducts()
            .then((response) => {
                console.log(response.data)
                setData(response.data);
                setLoading(false);
            }) 
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [fetch]);


    return { data, loading, error, setFetch };
};

export default useGet;