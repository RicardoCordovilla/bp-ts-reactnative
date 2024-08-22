import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../../utils/styles/globlalstyles";

const styles = StyleSheet.create({
    field_container: {
        backgroundColor: '#fff',
        height: 'auto',
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: 'column',
        gap: 5,
    },
    field_label: {
        fontSize: 16,
        marginBottom: 10,
        color:primaryColor
    },
    field_input: {
        height: 60,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        paddingVertical: 15,
        color:secondaryColor,
        fontSize: 16
    },
    field_errorLabel: {
        color: '#ff2111',
        marginBottom: 10,
        fontSize: 14,
    },
    field_errorInput: {
        borderBlockColor: 'red'
    },
    field_disabledInput: {
        backgroundColor: '#f0f0f0',
        color: '#666'
    }
})

export default styles