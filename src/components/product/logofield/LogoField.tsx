import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './logofield.styles'

interface LogoFieldProps {
    title: string
    image: string
}

const LogoField = ({ title, image }: LogoFieldProps) => {
    return (
        <View style={styles.logoField_container}>
            <Text style={styles.logoField_title}>
                {title}
            </Text>
            <Image
                style={styles.logoField_image}
                source={{ uri: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg' }}
            />
        </View>
    )
}

export default LogoField