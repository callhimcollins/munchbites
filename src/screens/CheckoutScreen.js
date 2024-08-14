import Checkout from "../components/Checkout";
import { View, Text, StyleSheet } from "react-native";


const CheckoutScreen = () => {
    return (
        <View style={styles.container}>
            <Checkout/>
        </View>
    )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    }
  });