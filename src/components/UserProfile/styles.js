import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    profileScreen: {
        marginTop: 25
    },
    profileHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    userImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#F03800',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 30
    },
    userName: {
        marginLeft: 5,
        fontFamily: 'MontserratBold'
    },
    addressSection: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    homeAddressButton: {
        backgroundColor: '#F03800',
        paddingHorizontal: 30,
        paddingVertical: 7,
        borderRadius: 5
    },
    workAddressButton: {
        backgroundColor: 'black',
        paddingHorizontal: 30,
        paddingVertical: 7,
        borderRadius: 5
    },
    addressText: {
        fontFamily: 'MontserratBold',
        color: 'white',
        fontSize: 13
    },
    amountContainer: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        marginHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 7
    },
    amountText: {
        color: 'white',
        fontFamily: 'MontserratBold',
    },
    amount: {
        color: '#F03800'
    },
    referBox: {
        marginTop: 30,
        marginHorizontal: 20,
        backgroundColor: '#F03800',
        paddingVertical: 100,
        paddingHorizontal: 10,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    referText: {
        color: 'white',
        fontFamily: 'MontserratBold',
        fontSize: 18
    }
});

export default styles