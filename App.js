import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import CheckoutScreen from './src/screens/CheckoutScreen';
import SocialGrubsScreen from './src/screens/SocialGrubsScreen'
import CreateGrubScreen from './src/screens/CreateGrubScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';

export default function App() {
  const [loaded] = useFonts({
    MontserratSemi: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    MontserratBlack: require('./assets/fonts/Montserrat-Black.ttf')
    
  })

  if(!loaded){
    return;
  }
  // const restaurant = restaurants[0]
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <RootNavigator/>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
