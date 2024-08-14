import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        paddingTop: 40,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 8
    },
    cityGrubsLogo: {
        width: 82,
        height: 31
    },
    profileImageContainer: {
        width: 50,
        height: 50,
        padding: 5,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F03800'
    },
    profileImage: {
        width :40,
        height: 40,
        borderRadius: 30
    }
});

export default styles
