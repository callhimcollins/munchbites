import { View, StyleSheet } from "react-native";
import RestaurantDetails from "../components/RestaurantDetails";
import restaurants from '../../assets/data/restaurants.json'
import RestaurantMainDetails from "../components/RestaurantDetails/RestaurantMainDetails";


const restaurant = restaurants[0]
const RestaurantDetailScreen = () => {
    return(
        <View style={styles.container}>
            <RestaurantDetails restaurant={restaurant} />
        </View>
    )
}

export default RestaurantDetailScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    }
  });