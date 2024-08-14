import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
        padding: 10
    },
    itemImageContainer: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemImage: {
        width: 100,
        height: 100,
    },
    itemNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200
    },
    itemName: {
        fontFamily: 'MontserratSemi'
    },
    priceContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    price: {
        color: '#F03800',
        fontFamily: 'MontserratSemi'
    },
    actionButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 5
    },
    actionButton: {
        backgroundColor: '#F03800',
        width: '49%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        borderRadius: 5
    },
    actionText: {
        color: 'white',
        fontFamily: 'MontserratSemi'
    },
    checkoutContainer: {
        width: '100%',
        backgroundColor: '#F03800',
        marginTop: 10,
        paddingVertical: 7,
        paddingHorizontal: 4,
        alignItems: 'center',
        borderRadius: 5
    }
});

export default styles;