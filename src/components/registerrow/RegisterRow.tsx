import React from "react";
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, View, Text } from 'react-native'
import { Product } from "../../types/types";
import styles from './registerrow.styles'
import { useGlobalStore } from "../../utils/store/products.store";


interface RegisterRowProps {
    item: Product;
}


const RegisterRow: React.FC<RegisterRowProps> = ({ item }) => {
    const navigate = useNavigation()
    const { setProductStore } = useGlobalStore()
    const { id, name } = item

    const handleSelectProduct = (): void => {
        console.log('product selected')
        setProductStore({
            ...item,
            logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg'
        })
        navigate.navigate('product')
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