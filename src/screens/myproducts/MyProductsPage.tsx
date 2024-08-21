import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
// import { ProductsList } from "../../types/types"
import useGet from "../../utils/hooks/fetchHook"
import ProductsContainer from "../../components/productscontainer/ProductsContainer"

interface Product {
    id: number
    name: string
    desription: string
    logo: string
    date_release: string
    date_revision: string
}

type ProductsList = Product[]



const MyProductsPage: React.FC = () => {

    const [products, setProducts] = useState<ProductsList>([])
    const { data, loading, error, setFetch } = useGet()

    useEffect(() => {
        if (data) {
            // console.log(data)
            setProducts(data)
        }
    }, [])


    const navigate = useNavigation()
    return (
        <SafeAreaView>
            <View>
                <ProductsContainer
                    items={products}
                />
            </View>

        </SafeAreaView>
    )
}

export default MyProductsPage