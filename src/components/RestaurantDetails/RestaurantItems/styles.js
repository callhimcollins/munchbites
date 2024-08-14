import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    categoryBoxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
        left: '50%',
        right: '50%',
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
    },
    

})

export default styles