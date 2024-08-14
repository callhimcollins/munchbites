import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
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

})

export default styles