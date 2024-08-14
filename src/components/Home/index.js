import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import CityWord from "../CityWord";
import RestaurantListing from "../RestaurantListing";
import restaurants from '../../../assets/data/restaurants.json'
import categories from '../../../assets/data/categories.json'
import HomeHeader from "./HomeHeader";
import styles from "./styles";
import RestaurantListingSection from "./RestaurantListingSection";
import UpdateList from "./UpdateList";
import { useNavigation } from "@react-navigation/native";

const Home = ({user, restaurant}) => {
    const navigation = useNavigation()
    return(
        <View>
            <HomeHeader user={user}/>
            <ScrollView>
                <View style={styles.addressContainer}>
                    <Text style={styles.addressText}>Good morning { user.lastName },</Text>
                    <TouchableOpacity>
                        <Text style={styles.addressText}>You're At <Text style={styles.address}>{user.address}</Text></Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.wordContainer}>
                    <CityWord word={"Food Never Stops. Why Should We?"}/>
                </View>


                


                <View style={styles.locationPlacing}>
                    <View style={styles.categoryContainer}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            {categories.map((item) => {
                                return(
                                    <View style={styles.categoryBox}>
                                        <Image style={styles.categoryImage} source={{ uri: item.image }}/>
                                        <Text style={styles.categoryName}>{item.name}</Text>
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.locationPlacing}>
                    <View style={styles.locationContainer}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            {restaurants.map((item) => {
                                return(
                                    <Text style={styles.locationText}>{item.majorLocation}</Text>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>



                
                <RestaurantListingSection restaurant={restaurant} name={"20 Minutes Away From You"}/>
                <RestaurantListingSection restaurant={restaurant} name={"Below N3,000"}/>


                <UpdateList/>


                <RestaurantListingSection restaurant={restaurant} name={"Stay Green"}/>
                <RestaurantListingSection restaurant={restaurant} name={"Below N3,000"}/>
                

                <View style={styles.socialGrubsContainer}>
                    <Text style={styles.socialGrubsText}>Go To SocialGrubs</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SocialGrubsScreen')}>
                        <Image style={styles.socialGrubsArrow} source={require('../../../assets/arrowright.png')} />
                    </TouchableOpacity>
                </View>

            </ScrollView>

            


            

        </View>
    )
}

export default Home