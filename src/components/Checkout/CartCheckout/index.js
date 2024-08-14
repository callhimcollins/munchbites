import styles from "./styles";
import restaurants from '../../../../assets/data/restaurants.json'
import { View, Text, Image, TouchableOpacity } from "react-native";
import Cart from '../../Cart'
import { useState } from "react";
import CartList from "../../Cart/CartList";


const restaurant = restaurants[0]
const CartCheckout = () => {
    const returnSubTotal = () => {
        let itemListCost = []
        restaurant.cart[0].dishes.map((dish) => {
            itemListCost.push(dish.price)
        })
        const subTotal = itemListCost.reduce((a, b) => a + b, 0)
        return subTotal
    }
    const returnTotal = () => {
        return returnSubTotal() + 300 + 115
    }

    return (
        <View style={styles.cartCheckoutScreen}>
            <View style={styles.restaurantNameContainer}>
                <Image style={styles.logoImage} source={{ uri: restaurant.logoImage }}/>
                <Text style={styles.restaurantName}>{ restaurant.name }</Text>
            </View>

            <CartList/>

            <View style={styles.checkoutBox}>
                <Text style={styles.blackText}>Your SubTotal: N{returnSubTotal()}</Text>
                <Text style={styles.blackText}>Service Charge: N115</Text>
                <Text style={styles.blackText}>Delivery Charge: N300</Text>


                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total: N{returnTotal()}</Text>

                    <TouchableOpacity style={styles.payButton}>
                        <Text style={styles.payText}>Pay</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}

export default CartCheckout;