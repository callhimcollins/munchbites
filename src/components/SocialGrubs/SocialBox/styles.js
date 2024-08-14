import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    screenContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    boxContainer: {
        padding: 15,
        elevation: 10,
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userDetail: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginRight: 7
    },
    usernameText: {
        fontFamily: 'MontserratBold',
        fontSize: 12,
        color: '#3C3C3C',
    },
    dateText: {
        fontFamily: 'MontserratBold',
        fontSize: 13,
    },
    boxImageContainer: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    },
    boxImage: {
        width: '95%',
        height: 180,
        borderRadius: 10
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10
    },
    contentText: {
        fontFamily: 'MontserratBold',
        fontSize: 12,
        lineHeight: 16
    },
    likeContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    numberLiked: {
        color: '#F03800',
        fontFamily: 'MontserratBold',
        fontSize: 13
    },
    likeButton: {
        backgroundColor: '#F03800',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 4
    },
    likeText: {
        color: 'white',
        fontFamily: 'MontserratBold',
    }
});

export default styles;