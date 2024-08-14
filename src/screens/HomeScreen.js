import restaurants from '../../assets/data/restaurants.json'
import { StyleSheet, View, Text } from 'react-native';
import Home from '../components/Home';
import users from '../../assets/data/users.json'
import RestaurantBox from '../components/RestaurantBox';

const user = users[0]
const HomeScreen = () => {
  return (
      <View style={styles.container}>
        <Home user={user} restaurant={restaurants}/>
      </View>
    );
}

export default HomeScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 95,
    backgroundColor: 'white'
  }
});