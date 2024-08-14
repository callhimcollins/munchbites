import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Image, TouchableOpacity, Animated, Modal } from "react-native"
import {  Fontisto, Octicons, SimpleLineIcons } from "@expo/vector-icons"
import styles from './styles'
import Cart from '../../Cart'
import { useNavigation } from '@react-navigation/native'



const ModalPopup = ({visible, children}) => {
    const [showModal, setShowModal] = useState(visible)
    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        toggleModal()
    }, [visible])
    const toggleModal = () => {
        if(visible){
            setShowModal(true)
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }).start();
        }else{
            setTimeout(() => setShowModal(false), 200)
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
        }
    }
    return(
        <Modal transparent visible={showModal}>
                <View style={ styles.modalBackground }>
                    <Animated.View style={[styles.modalContainer, { transform: [{scale: scaleValue}] }]}>
                        { children }
                    </Animated.View>
                </View>

        </Modal>
    )
}

const RestaurantDetailHeader = ({restaurant}) => {
    const [visible, setVisible] = useState(false)
    const navigation = useNavigation()
    return (
        <View>
            <ModalPopup visible={visible}>
                <View>
                    <TouchableOpacity onPress={() => setVisible(false)} style={styles.modalHeader}>
                        <Fontisto name='close' color={'black'} size={20}/>
                    </TouchableOpacity>
                    <Cart/>
                </View>
            </ModalPopup>
            <View style={styles.header}>

                <View style={styles.restaurantNameContainer}>

                    <View style={styles.logoImageContainer}>
                        <Image style={styles.logoImage} source={{ uri: restaurant.logoImage }}/>
                    </View>

                </View>

                <TouchableOpacity style={styles.searchButton}>
                    <Octicons name="search" color={"white"} size={15}/>
                    <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.5} onPress={() => setVisible(true)} style={styles.cart}>
                    <SimpleLineIcons name="bag" color={'white'} size={20}/>
                </TouchableOpacity>
            </View>


            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.homeButton}>
                <Text style={styles.homeText}>Go Back Home</Text>
            </TouchableOpacity>
            

        </View>


    )
}

export default RestaurantDetailHeader

