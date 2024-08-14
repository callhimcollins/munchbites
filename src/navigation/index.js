import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CheckoutScreen from "../screens/CheckoutScreen";
import SocialGrubsScreen from '../screens/SocialGrubsScreen'
import CreateGrubScreen from '../screens/CreateGrubScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name={"RestaurantDetailScreen"} component={RestaurantDetailScreen} options={{ headerShown: false }}/>
            <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} options={{ headerShown: false }}/>
            <Stack.Screen name={"CreateGrubScreen"} component={CreateGrubScreen} options={{ headerShown: false }}/>
            <Stack.Screen name={"SocialGrubsScreen"} component={SocialGrubsScreen} options={{ headerShown: false }}/>
            <Stack.Screen name={"CheckoutScreen"} component={CheckoutScreen} options={{ headerShown: false }}/>

        </Stack.Navigator>
    )
}


export default RootNavigator