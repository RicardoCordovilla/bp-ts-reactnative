import { useEffect, useState } from "react";
import API from "../fetch/api";
import { Product } from "../../types/types";

export const useGetProducts = () => {
    const [data, setData] = useState<Product[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            const response = await API.getAllProducts();
            setData(response);
            setLoading(false);
        } catch (error) {
            const { message } = error as Error
            setError(message);
            setLoading(false);
        }
    };

    return { data, loading, error, fetchData };
};

export const useVerifyProduct = () => {
    const [exists, setExists] = useState<boolean>(false);
    const [verifying, setVerifying] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchVerification = async (id: string) => {
        try {
            const response = await API.verifyProductExist(id);
            setExists(response);
            setVerifying(false);
        } catch (error) {
            const { message } = error as Error
            setError(message);
            setVerifying(false);
        }
    };

    return { exists, verifying, error, fetchVerification };

};

export const useCreateProduct = () => {
    const [response, setResponse] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const createProduct = async (product: Product | null) => {
        try {
            setLoading(true);
            const response = await API.createProduct(product);
            setResponse(response);
            setLoading(false);
        } catch (error) {
            const { message } = error as Error
            setError(message);
            setLoading(false);
        }
    }

    return { response, loading, error, createProduct };

}

export const useUpdateProduct = () => {
    const [responseUpdate, setResponseUpadate] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const updateProduct = async (product: Product | null) => {
        try {
            setLoading(true);
            const response = await API.updateProduct(product);
            setResponseUpadate(response);
            setLoading(false);
        } catch (error) {
            const { message } = error as Error
            setError(message);
            setLoading(false);
        }
    }

    return { responseUpdate, loading, error, updateProduct };

}

export const useDeleteProduct = () => {
    const [responseDelete, setResponseDelete] = useState<string | null | undefined>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchDelete = async (id: string) => {
        try {
            setLoading(true);
            const response = await API.deleteProduct(id);
            setResponseDelete(response);
            setLoading(false);
        } catch (error) {
            const { message } = error as Error
            setError(message);
            setLoading(false);
        }
    }

    return { responseDelete, loading, error, fetchDelete };

}

export default useGetProducts;