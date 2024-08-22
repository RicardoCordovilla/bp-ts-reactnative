import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
// import ProductForm from '../../components/productform/ProductForm'
import styles from './editpage.styles'
import { useNavigation } from '@react-navigation/native'
import ProductForm from '../../components/productform/ProductForm'
import { useGlobalStore } from '../../utils/store/products.store'
import { Product } from '../../types/types'
import { useCreateProduct, useUpdateProduct, useVerifyProduct } from '../../utils/hooks/useFetch'

const EditPage: React.FC = () => {
    const navigate = useNavigation()
    const [product, setProduct] = useState<Product | null>(null)
    const { productStore, setProductStore } = useGlobalStore() as { productStore: Product | { id: string; name: string; description: string; logo: string; date_release: string; date_revision: string; }; setProductStore: (product: Product) => void; }
    const { exists, verifying, error, fetchVerification } = useVerifyProduct()
    const { response, createProduct } = useCreateProduct()
    const { responseUpdate, updateProduct } = useUpdateProduct()



    const saveProduct = async (product: Product|null) => {
        console.log('product', product)
        // if (exists) {
        //     await updateProduct(product)
        // }
        // else {
        //     await createProduct(product)
        // }
    }

    const handleEdit = (product: Product) => {
        fetchVerification(product?.id)
        setProduct(product)
    }

    useEffect(() => {
        saveProduct(product)
    }, [product])


    useEffect(() => {
        if (responseUpdate) setProductStore(responseUpdate)
        if (response) setProductStore(response)
        // navigate.navigate('product')
    }, [responseUpdate, response])

    return (
        <SafeAreaView style={styles.editPage_container}>
            <TouchableOpacity
                onPress={() => navigate.goBack()}
            >
                <Text>Atras</Text>
            </TouchableOpacity>
            <View>
                <ProductForm
                    product={productStore}
                    updateProduct={handleEdit} />
            </View>
        </SafeAreaView>
    )
}

export default EditPage 