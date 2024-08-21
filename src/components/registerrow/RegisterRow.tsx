import React from "react";
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, View, Text } from 'react-native'
import { Product } from "../../types/types";
import styles from './registerrow.styles'


interface RegisterRowProps {
    product: Product;
}


const RegisterRow: React.FC<RegisterRowProps> = ({ product }) => {
    const navigate = useNavigation()
    const { id, name } = product

    const handleSelectProduct = (): void => {
        console.log('product selected')
    }

    return (
        <TouchableOpacity onPress={handleSelectProduct}>
            <View style={styles.row_container}>
                <View style={styles.row_infoColumn}>
                    <Text style={styles.row_title}>{name}</Text>
                    <Text style={styles.row_info}>{id}</Text>
                </View>
                <View >
                    <Text>+</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RegisterRow