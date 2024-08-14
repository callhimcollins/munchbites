import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    header: {
        width: "100%",
        backgroundColor: 'transparent',
        position: 'absolute',
        paddingTop: 30,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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
    homeButton: {
        top: 85,
        backgroundColor:'black',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 3
    },
    homeText: {
        color: 'white',
        fontFamily: 'MontserratBold',
    },
    modalBackground: {
        flex: 1, 
        backgroundColor: 'rgba(0,0,0,.5)',
        paddingTop: 60,
        alignItems: 'center' 
    },
    modalContainer: {
        width: '90%',
        height: '85%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
        elevation: 20,
        borderRadius: 10
    },
    modalHeader: {
        width: '100%',
        height: 30,
        alignItems: 'flex-end',
    }

})

export default styles