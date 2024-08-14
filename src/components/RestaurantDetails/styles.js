import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    header: {
        width: "100%",
        backgroundColor: 'white',
        position: 'absolute',
        paddingTop: 30,
        paddingBottom: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    restaurantNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: 100,
    },
    logoImageContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    logoImage: {
        width: 40,
        height: 40,
        borderRadius: 5

    },
    restaurantName: {
        marginLeft: 5,
        fontFamily: 'MontserratBold'
    },
    searchButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#F03800',
        paddingVertical: 10,
        width: 150,
        borderRadius: 30
    },
    searchButtonText: {
        color: 'white',
        fontSize: 14,
        fontFamily: "MontserratBold"
    },
    cart: {
        backgroundColor: 'black',
        padding: 8,
        borderRadius: 5
    },
    mainContent: {
        marginTop: 90
    },
    galleryContainer: {
        padding: 10
    },
    galleryImage: {
        width: 360,
        height: 230,
        borderRadius: 15,
        marginRight: 15,
    },
    detailBoxContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailBox: {
        padding: 10,
        backgroundColor: 'black',
        width: '90%',
        height: 80,
        borderRadius: 7,
    },
    detailBoxNameContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailBoxWelcomeText: {
        color: 'white',
        fontFamily: 'MontserratBlack',
        fontSize: 17
    },
    detailBoxName: {
        color: '#F03800',
    },
    extraDetails: {
        marginTop: 12,
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    extraDetailsText: {
        color: 'white',
        fontFamily: 'MontserratBlack',
        fontSize: 12
    },
    timeAwayContainer: {
        width: '100%',
        marginTop: 10,
        padding: 12,
        backgroundColor: '#F03800',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeAwayText: {
        color: 'white',
        fontFamily: 'MontserratBold',
    },
    categoryBoxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#EDEDED',
        width: 300,
        padding: 12,
        borderRadius: 30
    },
    categoryBoxText: {
        fontFamily: 'MontserratBold',
        color: '#3C3C3C',
        fontSize: 15,
        marginLeft: 15
    },
    categoryName: {
        color: '#F03800',
        fontFamily: 'MontserratBold',
        fontSize: 16,
        marginTop: 20,
        padding: 10
    },
    dish: {
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 12,
        width: 340,
        height: 260,
        marginRight: 10,
        marginLeft: 10
    },
    dishImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    dishImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    dishDetailContainer: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        marginTop: 10
    },
    dishDetailText: {
        fontFamily: 'MontserratBold'
    }

})

export default styles