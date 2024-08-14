import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import styles from "./styles"


const RestaurantBox = ({restaurant}) => {
    const navigation = useNavigation()
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetailScreen')} style={styles.restaurantContainer}>
          <Image style={ styles.restaurantCoverImage } source={{ uri: restaurant.coverImage }} />
  
          <View style={ styles.restaurantMainDetails }>
  
            <View style={styles.restaurantNameContainer}>
              <Image style={styles.restaurantLogoImage} source={{ uri: restaurant.logoImage }}/>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
            </View>
  
            <Text style={styles.rating}>Rating: {restaurant.rating}%</Text>
          </View>
  
          <Text style={styles.avgCost}>Avg. Cost: {restaurant.avgCost}</Text>
  
  
          <View style={styles.timeAway}>
            <Text style={styles.timeAwayText}>{restaurant.timeAway} Minutes Away From You</Text>
          </View>
  
  
      </TouchableOpacity>
      </View>
      
    )
}

export default RestaurantBox