import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    cartCheckoutScreen: {
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 12,
        padding: 5,
        height: 450,
    },
    restaurantNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    logoImage: {
        width: 30,
        height: 30,
        borderRadius: 5
    },
    restaurantName: {
        fontFamily: 'MontserratBold',
        marginLeft: 5
    },
    checkoutBox: {
        marginTop: 10,
        paddingTop: 10,
        paddingLeft: 10,
        backgroundColor: 'black',
        width: 370,
        height: 140,
        borderRadius: 10
    },
    blackText: {
        color: 'white',
        fontFamily: 'MontserratBold',
        marginBottom: 6
    },
    totalContainer: {
        marginTop: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    totalText: {
        color: '#F03800',
        fontFamily: 'MontserratBold',
        fontSize: 18
    },
    payButton: {
        backgroundColor: '#F03800',
        paddingHorizontal: 40,
        paddingVertical: 5,
        borderRadius: 5
    },
    payText: {
        color: 'white',
        fontFamily: 'MontserratBold',
    }

});


export default styles