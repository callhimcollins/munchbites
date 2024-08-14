import { View, Text, StyleSheet } from "react-native";
import UserProfile from "../components/UserProfile";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <UserProfile/>
        </View>
    )
}

export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    }
  });