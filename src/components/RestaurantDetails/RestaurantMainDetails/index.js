import { View, Text, Image, FlatList } from "react-native"
import styles from './styles'

const RestaurantMainDetails = ({restaurant}) => {
    return (
        <View >


            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.galleryContainer}
            data={restaurant.gallery}
            renderItem={({item}) => {
            return(
                    <Image style={styles.galleryImage} source={{ uri: item }}/>
            )
            }}
            />


            <View style={styles.detailBoxContainer}>

                <View style={styles.detailBox}>

                    <View style={styles.detailBoxNameContainer}>
                        <Text style={styles.detailBoxWelcomeText}>Welcome To <Text style={styles.detailBoxName}>{restaurant.name}</Text> </Text>
                    </View>

                    <View style={styles.extraDetails}>
                        <Text style={styles.extraDetailsText}>Rating: {restaurant.rating}%</Text>
                        <Text style={styles.extraDetailsText}>Avg. Cost: N{restaurant.avgCost}</Text>

                    </View>


                </View>

                <View style={styles.timeAwayContainer}>
                    <Text style={styles.timeAwayText}>We are {restaurant.timeAway} Minutes From You</Text>
                </View>

            </View>

        </View>


    )
}

export default RestaurantMainDetails

