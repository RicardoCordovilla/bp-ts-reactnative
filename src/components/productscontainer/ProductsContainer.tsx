import React from 'react'
import { Product } from '../../types/types'
import { ScrollView, View } from 'react-native'
import RegisterRow from '../registerrow/RegisterRow'

// interface Product {
//     id: string;
//     name: string;
//     // Add other product properties as needed
// }

interface ProductsContainerProps {
    items: ProductsList;
}

type ProductsList = Product[];
const ProductsContainer: React.FC<ProductsContainerProps> = ({ items }) => {
    return (
        <ScrollView >
            {items.map((item) => {
                return (
                    <View key={item.id}>
                        <RegisterRow product={item} />
                    </View>
                )
            }
            )}
        </ScrollView>
    )
}

export default ProductsContainer