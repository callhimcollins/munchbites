import { View, Text } from "react-native";
import RestaurantListing from "../../RestaurantListing";
import styles from "./styles";


const RestaurantListingSection = ({restaurant, name}) => {
    return(
        <View>
            <View style={styles.restaurantListingContainer}>
                <Text style={styles.restaurantListingHeading}>{name}</Text>
                <RestaurantListing restaurant={restaurant}/>
            </View>
        </View>
    )
}

export default RestaurantListingSection