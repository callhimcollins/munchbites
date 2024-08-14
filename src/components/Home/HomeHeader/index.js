import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import restaurantHeaderStyles from '../../RestaurantDetails/RestaurantDetailHeader/styles'
import { useNavigation } from "@react-navigation/native";


const HomeHeader = ({user}) => {
    const navigation = useNavigation()
    return(
        <View style={styles.headerContainer}>
            <Image style={styles.cityGrubsLogo} source={require('../../../../assets/citygrubslogo.png')} />

            <TouchableOpacity style={restaurantHeaderStyles.searchButton}>
                    <Feather name="search" color={"white"} size={15}/>
                    <Text style={restaurantHeaderStyles.searchButtonText}>Search</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} style={styles.profileImageContainer}>
                <Image style={styles.profileImage} source={{ uri: user.image }}/>
            </TouchableOpacity>
        </View>
    )
}

export default HomeHeader
