import styles from "./styles";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import restaurants from '../../../assets/data/restaurants.json'
import CartList from "./CartList";
import { useNavigation } from "@react-navigation/native";

const restaurant = restaurants[0]
const Cart = () => {
    const navigation = useNavigation()
    return(
        <View>
            <CartList/>
            <TouchableOpacity onPress={() => navigation.navigate('CheckoutScreen')} style={styles.checkoutContainer}>
                <Text style={styles.actionText}>Proceed To Checkout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Cart