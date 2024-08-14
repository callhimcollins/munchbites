import React from 'react'
import { View, Text, Image, FlatList, Pressable, TouchableOpacity } from "react-native"
import styles from './styles'

const RestaurantItems = ({restaurant}) => {
    
    return (
        <View >
            
            <View style={styles.categoryBoxContainer}>
                <View style={styles.categoryBox}>
                    <FlatList
                    horizontal={true}
                    data={restaurant.categories}
                    renderItem={({item}) => {
                        return(
                            <View>
                                <Text style={styles.categoryBoxText}>{item.name}</Text>
                            </View>
                        )
                    }}
                    />
                </View>
            </View>


            <View style={{ marginTop: 30 }}>

            <View>
                <FlatList
                data={restaurant.categories}
                renderItem={({item}) => {
                    return(
                        <View>
                            <Text style={styles.categoryName}>{item.name}</Text>
                            <FlatList
                            showsHorizontalScrollIndicator={false}
                            style={{ height:290 }}
                            horizontal={true}
                            data={item.dishes}
                            renderItem={({item}) => {
                                return(
                                    <TouchableOpacity activeOpacity={.9} style={styles.dish}>
                                        
                                        <View style={styles.dishImageContainer}>
                                            <Image style={styles.dishImage} source={{ uri: item.image }}/>
                                        </View>

                                        <View style={styles.dishDetailContainer}>
                                            <Text style={styles.dishDetailText}>{item.name}</Text>

                                            <Text style={styles.dishDetailText}>N{item.price}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                            />
                        </View>
                    )
                }}
                />
            </View>



            <View>
                <FlatList
                data={restaurant.categories}
                renderItem={({item}) => {
                    return(
                        <View>
                            <Text style={styles.categoryName}>{item.name}</Text>
                            <FlatList
                            showsHorizontalScrollIndicator={false}
                            style={{ height:290 }}
                            horizontal={true}
                            data={item.dishes}
                            renderItem={({item}) => {
                                return(
                                    <Pressable activeOpacity={.9} style={styles.dish}>

                                        <View style={styles.dishImageContainer}>
                                            <Image style={styles.dishImage} source={{ uri: item.image }}/>
                                        </View>

                                        <View style={styles.dishDetailContainer}>
                                            <Text style={styles.dishDetailText}>{item.name}</Text>
                                            <Text style={styles.dishDetailText}>N{item.price}</Text>
                                        </View>
                                    </Pressable>
                                )
                            }}
                            />
                        </View>
                    )
                }}
                />
            </View>
           
            
        </View>

        

        </View>


    )
}

export default RestaurantItems
