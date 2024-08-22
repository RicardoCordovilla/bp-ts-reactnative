import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './buttonaction.styles'

interface ButtonActionProps {
    title: string
    severity: 'primary' | 'secondary' | 'danger'
    action: () => void
}

const severityStyles = {
    primary: {
        bg: '#ebee40',
        color: '#000',
        border: '#000'
    },
    secondary: {
        bg: '#e1e1eb',
        color: '#a19e9e',
        border: '#a19e9e',
    },
    danger: {
        bg: '#c22424',
        color: '#fff',
        border: 'transparent'
    }
}

const ButtonAction: React.FC<ButtonActionProps> = ({ title, severity, action }) => {
    return (
        <TouchableOpacity onPress={action}>
            <View style={[
                styles.buttonAction_container,
                {
                    backgroundColor: severityStyles[severity].bg,
                    borderColor: severityStyles[severity].border
                }
            ]}>
                <Text
                    style={[styles.buttonAction_title,
                    { color: severityStyles[severity].color }
                    ]}>
                    {title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonAction