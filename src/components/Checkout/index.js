import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import blogStyles from '../SocialGrubs/styles'
import CartCheckout from "./CartCheckout";
import { useNavigation } from "@react-navigation/native";

const Checkout = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.checkoutScreen}>
            <View style={blogStyles.headerContainer}>
                <Text style={blogStyles.socialGrubs}>Checkout</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={blogStyles.homeButton}>
                    <Text style={blogStyles.homeButtonText}>Go Back To Restaurant</Text>
                </TouchableOpacity>
            </View>


            <CartCheckout/>

            
        </View>
    )
}

export default Checkout