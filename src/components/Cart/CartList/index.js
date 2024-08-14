import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles";
import restaurants from '../../../../assets/data/restaurants.json'

const restaurant = restaurants[0]

const CartList = () => {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ height: 450 }}>
            {restaurant.cart.map((item) => {
                return(
                    item.dishes.map((dish) => {
                        return(
                            <View>
                                <View style={styles.itemContainer}>
                                    <View style={styles.itemImageContainer}>
                                        <Image style={styles.itemImage} source={{ uri: dish.image }}/>
                                    </View>

                                    <View>
                                        <View style={styles.itemNameContainer}>
                                            <Text style={styles.itemName}>{ dish.name }</Text>
                                            <Text style={[styles.itemName, {alignItems: 'flex-end'}]}> x{ dish.quantity }</Text>
                                        </View>

                                        <View style={styles.priceContainer}>
                                            <Text style={styles.price}>Total: N{dish.price * dish.quantity}</Text>
                                        </View>
                                        
                                    </View>
                                    
                                </View>
                                <View style={styles.actionButtonContainer}>

                                    <TouchableOpacity style={styles.actionButton}>
                                        <Text style={styles.actionText}>Add</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[styles.actionButton, {backgroundColor: 'black'}]}>
                                        <Text style={styles.actionText}>Remove</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            
                        )
                    })
                )
            })}
            </ScrollView>
        </View>
    )
}

export default CartList