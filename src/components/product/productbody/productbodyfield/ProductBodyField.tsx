import React from 'react'
import { Text, View } from 'react-native'
import styles from './productbodyfield.styles'

interface ProductBodyFieldProps {
    title: string
    value: string
}

const ProductBodyField: React.FC<ProductBodyFieldProps> = ({ title, value }) => {
    return (
        <View style={styles.productBodyField_container}>
            <Text style={styles.productBodyField_title}>
                {title}
            </Text>
            <Text style={styles.productBodyField_info}>
                {/* {value?.substring(0, 10)} */}
                {
                    title !== 'Nombre' ? value?.substring(0, 10) : value
                }
            </Text>
        </View>
    )
}

export default ProductBodyField
