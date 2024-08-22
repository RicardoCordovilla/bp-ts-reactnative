import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { FieldProps, Product } from "../../types/types"
import ProductsContainer from "../../components/productscontainer/ProductsContainer"
import { useGetProducts } from "../../utils/hooks/useFetch"
import styles from "./myproducts.styles"
import InputTextField from "../../components/fields/inputfield/InputTextField"
import ButtonAction from "../../components/buttons/ButtonAction"


const MyProductsPage: React.FC = () => {
    const navigate = useNavigation()
    const { data, fetchData } = useGetProducts()

    const [products, setProducts] = useState<Product[]>([])
    const [filterdProducts, setFilteredProducts] = useState<Product[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (data && data.length > 0) {
            setProducts(data)
            setFilteredProducts(data)
        }
    }, [data])


    const handleSearch = (text: string) => {
        const filtered = products.filter((product) => {
            return product.name.toLowerCase().includes(text.toLowerCase())
        })
        setFilteredProducts(filtered)
    }

    const addProduct = () => {
        navigate.navigate('edit')
    }

    const searchField: FieldProps = {
        label: 'Search',
        placeholder: 'Search...',
        onChange: handleSearch,
        validation: 'text',
        disabled: false,
        value: ''
    }


    return (
        <SafeAreaView style={styles.container}>
            <View >
                <InputTextField
                    label={searchField.label}
                    placeholder={searchField.placeholder}
                    validation={searchField.validation}
                    disabled={searchField.disabled}
                    value={searchField.value}
                />
                <View>
                    {
                        filterdProducts.length > 0 ?
                            <ProductsContainer items={filterdProducts} />
                            : <Text>No products found</Text>
                    }
                </View>
            </View>
            <ButtonAction title='Agregar' severity='primary' action={addProduct} />
        </SafeAreaView>
    )
}

export default MyProductsPage