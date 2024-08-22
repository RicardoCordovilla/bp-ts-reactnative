import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './productheader.styles'
import { Product } from '../../../types/types'

type ProductHeaderProps = Pick<Product, 'id' | 'description'>

const ProductHeader: React.FC<ProductHeaderProps> = ({ id, description }) => {
    return (
        <View style={styles.productHeader_container}>
            <Text style={styles.productHeader_title}>
                ID: {id}
            </Text>
            <Text style={styles.productHeader_info}>
                {description}
            </Text>
        </View>
    )
}

export default ProductHeader