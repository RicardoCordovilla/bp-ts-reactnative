import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Modal } from 'react-native'
import ProductHeader from '../../components/product/productheader/ProductHeader'
import { useNavigation } from '@react-navigation/native'
import { useGlobalStore } from '../../utils/store/products.store'
import LogoField from '../../components/product/logofield/LogoField'
import ProductBodyField from '../../components/product/productbody/ProductBody'
import ProductBody from '../../components/product/productbody/ProductBody'
import ProductActions from '../../components/product/actions/ProductActions'
import styles from './productpage.styles'
import ButtonAction from '../../components/buttons/ButtonAction'
import { useDeleteProduct } from '../../utils/hooks/useFetch'

const ProductPage = () => {
    const { productStore } = useGlobalStore()
    const navigate = useNavigation()
    const { fetchDelete, responseDelete } = useDeleteProduct()

    const [modalVisible, setModalVisible] = useState<boolean>(false)

    const handleEdit = () => {
        navigate.navigate('edit')
    }

    const handleDelete = () => {
        // removeProduct(productStore.id)
        setModalVisible(true)
    }

    const deleteProduct = () => {
        // navigate.navigate('home')
        fetchDelete(productStore.id)
    }

    useEffect(() => {
        if (responseDelete) {
            console.log('responseDelete', responseDelete)
            navigate.navigate('home')
            setModalVisible(false)
        }
    }, [responseDelete])

    return (
        <SafeAreaView style={styles.productPage_container}>
            <TouchableOpacity onPress={() => navigate.goBack()}>
                <Text>
                    Atras
                </Text>
            </TouchableOpacity>
            <ProductHeader id={productStore.id} description={productStore.description} />
            <LogoField title={'Logo'} image={productStore.logo} />
            <ProductBody name={productStore.name} date_release={productStore.date_release} date_revision={productStore.date_revision} />
            <ProductActions
                onEdit={handleEdit}
                onDelete={handleDelete}
            />


            <Modal
                visible={modalVisible}
                animationType='slide'
                style={styles.modal_container}
                transparent={true}
            >
                <View style={styles.modal_content}>
                    <View style={styles.modal_body}>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modal_close}>
                            <Text style={styles.modal_closeText}>X</Text>
                        </TouchableOpacity>
                        <Text style={styles.modal_title}>
                            ¿Estás seguro de eliminar este producto?
                            {productStore.name}
                        </Text>
                        <View style={styles.modal_actions}>
                            <ButtonAction title='Confirmar' severity='primary' action={deleteProduct} />
                            <ButtonAction title='Cancelar' severity='secondary' action={() => setModalVisible(false)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default ProductPage