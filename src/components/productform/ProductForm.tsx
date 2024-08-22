import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, Text } from 'react-native'
// import InputField from '../fields/InputField'
import styles from './productform.styles'
import ButtonAction from '../buttons/ButtonAction'
import { Product } from '../../types/types'
import InputTextField from '../fields/inputfield/InputTextField'


interface ProductFormProps {
    product: Product
    updateProduct: (product: Product) => void
}


const ProductForm: React.FC<ProductFormProps> = ({ product, updateProduct }) => {

    const { id, name, description, logo, date_release, date_revision } = product

    const [idForm, setIdForm] = useState<string>(id)
    const [nameForm, setNameForm] = useState<string>(name)
    const [descriptionForm, setDescriptionForm] = useState<string>(description)
    const [logoForm, setLogoForm] = useState<string>(logo)
    const [dateReleaseForm, setDateReleaseForm] = useState<string>(date_release)
    const [dateRevisionForm, setDateRevisionForm] = useState<string>(date_revision)


    const handleSave = () => {
        const product = {
            id: idForm,
            name: nameForm,
            description: descriptionForm,
            logo: logoForm,
            date_release: dateReleaseForm,
            date_revision: dateRevisionForm
        }
        updateProduct(product)
    }

    const resetForm = () => {
        setNameForm('')
        setDescriptionForm('')
        setLogoForm('')
        setDateReleaseForm('')
        setDateRevisionForm('')
    }

    const handleCancel = () => {
        resetForm()
    }

    const fields = [
        { label: 'Id', placeholder: 'Id', value: id, onChange: setIdForm, disabled: false, required: true, validation: 'number' },
        { label: 'Nombre', placeholder: 'Inrgresa el nombre del producto', value: name, onChange: setNameForm, disabled: false, required: true },
        { label: 'Descripción', placeholder: 'Inrgresa la descripción del producto', value: description, onChange: setDescriptionForm, disabled: false, required: true },
        { label: 'Logo', placeholder: 'Inrgresa la url del logo del producto', value: logo, onChange: setLogoForm, disabled: false, required: false },
        { label: 'Fecha de liberación', placeholder: 'Inrgresa la fecha de liberación del producto', value: date_release, onChange: setDateReleaseForm, disabled: false, required: true, validation: 'date' },
        { label: 'Fecha de revisión', placeholder: 'Inrgresa la fecha de revisión del producto', value: date_revision, onChange: setDateRevisionForm, disabled: true, required: true }
    ]

    return (
        <SafeAreaView >
            <View style={styles.productForm_container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.productForm_scroll}
                >
                    <View >
                        {
                            fields.map((field, index) => (
                                <InputTextField key={index}
                                    label={field.label}
                                    placeholder={field.placeholder}
                                    validation={field.validation}
                                    disabled={field.disabled}
                                    value={field.value}
                                />
                            ))
                        }
                    </View>
                </ScrollView>
                <View style={styles.productForm_actionsContainer}>
                    <ButtonAction title='Enviar' action={handleSave} severity='primary' />
                    <ButtonAction title='Reiniciar' action={handleCancel} severity='secondary' />
                </View>
                <View style={{ height: 30 }}></View>
            </View>
        </SafeAreaView>
    )
}

export default ProductForm