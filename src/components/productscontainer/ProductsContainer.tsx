import React from 'react'
import { Product, ProductsList } from '../../types/types'
import { ScrollView, View, Text } from 'react-native'
import RegisterRow from '../registerrow/RegisterRow'
import styles from './productscontainer.styles'
import RowProduct from '../skeletons/RowProduct'

interface MyProductsPageProps {
    items: Product[]
}

const ProductsContainer: React.FC<MyProductsPageProps> = ({ items }) => {
    return (
        <ScrollView style={styles.productsContainer_container}>
            {
                items.length > 0 ? items.map((item: Product, index: number) => {
                    return (
                        <View key={item.id} >
                            {
                                items.length > 1 &&
                                <RowProduct />                                                            }
                            <RegisterRow item={item} />
                            {
                                index < items.length - 1 &&
                                <View style={{ height: 1, backgroundColor: '#ccc' }} />
                            }
                        </View>
                    )
                }) : <View >
                    <Text >No products found</Text>
                </View>
            }
        </ScrollView>
    )
}

export default ProductsContainer