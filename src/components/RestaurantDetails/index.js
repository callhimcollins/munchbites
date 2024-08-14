import React, { useState, useEffect } from 'react'
import { View, Text, Image, FlatList, StyleSheet, Pressable, TouchableOpacity, ScrollView } from "react-native"
import {  Octicons, SimpleLineIcons } from "@expo/vector-icons"
import restaurants from '../../../assets/data/restaurants.json'
import styles from './styles'
import RestaurantItems from './RestaurantItems'
import RestaurantDetailHeader from './RestaurantDetailHeader'
import RestaurantMainDetails from './RestaurantMainDetails'

const RestaurantDetails = ({restaurant}) => {
    return (
        <View>
            <View>
                <RestaurantDetailHeader restaurant={restaurant}/>
            </View>


        
            <View style={styles.mainContent}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <RestaurantMainDetails restaurant={restaurant} />
                    <RestaurantItems restaurant={restaurant} />
                </ScrollView>

            </View>
        

        </View>
        


    )
}

export default RestaurantDetails

