import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './inputtextfield.styles'
import { InputFieldProps } from '../../../types/types'


const InputTextField: React.FC<InputFieldProps> = ({ label, placeholder, validation, disabled, value }) => {

    const [text, setText] = useState<string>('')
    const [error, setError] = useState<string | null>('')

    const validationTypes: Record<string, { regex: string, error: string }> = {
        number: {
            regex: '^[0-9]*$',
            error: 'Id inválido, solo números'
        },
        text: {
            regex: '^[a-zA-Z]*$',
            error: 'Solo texto'
        },
        date: {
            regex: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$',
            error: 'Formato de fecha incorrecto (yyyy-mm-dd)'
        }
    }

    const handleChange = (text: string) => {
        if (validation) {
            const regex = new RegExp(validationTypes[validation].regex)
            if (!regex.test(text)) {
                setError(validationTypes[validation].error)
            } else {
                setError(null)
            }
        }
        // onChange(text)
        setText(text)
    }

    return (
        <View style={styles.field_container}>
            <Text style={styles.field_label}>{label}</Text>
            <TextInput
                style={styles.field_input}
                placeholder={placeholder}
                onChangeText={handleChange}
                value={text}
                editable={!disabled}
            />
        </View>
    )
}

export default InputTextField
