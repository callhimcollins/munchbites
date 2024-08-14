import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    addressContainer: {
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    addressText: {
        fontFamily: 'MontserratBold'
    },
    address: {
        color: '#F03800'
    },
    wordContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialGrubsContainer: {
        marginTop: 10,
        backgroundColor: '#3C3C3C',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    socialGrubsText: {
        color: 'white',
        fontFamily: 'MontserratBold'
    },
    socialGrubsArrow: {
        height: 25,
        width: 25
    },
    locationPlacing: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    locationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#ECECEC',
        width: '65%',
        paddingVertical: 12,
        paddingHorizontal: 5,
        borderRadius: 50
    },
    locationText: {
        fontFamily: 'MontserratBold',
        marginLeft: 14,
    },
    categoryContainer: {
        marginTop: 15,
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: '85%',
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 20
    },
    categoryBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    categoryImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
        padding: 3,
        backgroundColor: 'white'
    },
    categoryName: {
        fontFamily: 'MontserratSemi',
        marginTop: 5,
        fontSize: 11,
    },
    restaurantListingContainer: {
        marginTop: 25
    },
    restaurantListingHeading: {
        color: '#F03800',
        paddingHorizontal: 15,
        fontFamily: 'MontserratBold',
        fontSize: 16
    }
});

export default styles