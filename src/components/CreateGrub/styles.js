import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    createGrubScreen: {
        marginTop: 20,
    },
    inputContainer: {
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        marginTop: 50,
        width: '90%'
    },
    textInput: {
        fontFamily: 'MontserratBold',
        paddingHorizontal: 10,
        paddingVertical: 20,
        maxHeight: 400
    },
    uploadImageButton: {
        marginTop: 20,
        backgroundColor: 'black',
        width: '87%',
        paddingVertical: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadImage: {
        color: 'white',
        fontFamily: 'MontserratBold',
    },
    postButton: {
        marginTop: 10,
        backgroundColor: '#F03800',
        width: '87%',
        paddingVertical: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    postText: {
        color: 'white',
        fontFamily: 'MontserratBold',
    }
});

export default styles