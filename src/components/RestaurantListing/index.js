import restaurants from '../../../assets/data/restaurants.json'
import { StyleSheet, FlatList } from 'react-native';
import RestaurantBox from '../RestaurantBox';



const RestaurantListing = ({restaurant}) => {
  return (
    <FlatList
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    data={restaurant}
    renderItem={({item}) => <RestaurantBox restaurant={item}/>}
    />
  );
}

export default RestaurantListing


