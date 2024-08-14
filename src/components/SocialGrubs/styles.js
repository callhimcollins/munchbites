import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    socialGrubsContainer: {
        marginTop: 30,
        marginBottom: 100,
        paddingBottom: 10
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 5,
        marginTop: 20
    },
    socialGrubs: {
        color: '#F03800',
        fontFamily: 'MontserratBold',
        fontSize: 20
    },
    homeButton: {
        backgroundColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5

    },
    homeButtonText: {
        color: 'white',
        fontFamily: 'MontserratBold',
    },
    createGrub: {
        position: 'absolute',
        zIndex: 100,
        bottom: 50,
        right: 20,
        backgroundColor: '#F03800',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 30
    },
    grubText: {
        color: 'white',
        fontFamily: 'MontserratBold'
    }
});

export default styles;