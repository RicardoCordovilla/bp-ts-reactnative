import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    productForm_container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    productForm_scroll: {
        width: '100%',
        height: 'auto',
    },
    productForm_actionsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        backgroundColor: '#fff',
        marginTop: 30,
    },


});

export default styles;
