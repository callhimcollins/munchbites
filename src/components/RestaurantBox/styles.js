import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      marginLeft: 10,
      paddingVertical: 10
      
    },
    restaurantContainer: {
        width: 330,
        height: 280,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        marginRight: 7
      },
      restaurantCoverImage: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        height: 170,
        resizeMode: 'cover'
      },
      restaurantMainDetails: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      restaurantNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      restaurantLogoImage: {
        width: 35,
        height: 35,
        borderRadius: 20
      },
      restaurantName: {
        marginLeft: 6,
        fontFamily: 'MontserratBold'
      },
      rating: {
        color: '#3c3c3c',
        fontFamily: 'MontserratSemi',
        fontSize: 13
      },
      avgCost: {
        paddingHorizontal: 15,
        marginTop: -4,
        fontFamily: "MontserratSemi",
        fontSize: 12
      },
      timeAway: {
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
      },
      timeAwayText: {
        fontFamily: 'MontserratBold',
        fontSize: 15
      }
    
})

export default styles