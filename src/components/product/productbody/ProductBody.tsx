import React from 'react'
import { Text, View } from 'react-native'
import ProductBodyField from './productbodyfield/ProductBodyField'


interface ProductBodyProps {
    date_revision: string
    date_release: string
    name: string
}


const ProductBody: React.FC<ProductBodyProps> = ({ name, date_revision, date_release }) => {
    const fields = [
        { key: 'Nombre', value: name },
        { key: 'Fecha de revisión', value: date_revision },
        { key: 'Fecha de liberación', value: date_release }
    ]

    return (
        <View>
            {
                fields.map((field, index) => (
                    <ProductBodyField key={index} title={field.key} value={field.value} />
                ))
            }
        </View>
    )
}

export default ProductBody

