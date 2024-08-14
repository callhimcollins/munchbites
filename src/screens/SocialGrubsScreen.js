import { View, Text, StyleSheet } from "react-native";
import SocialGrubs from "../components/SocialGrubs";

const SocialGrubsScreen = () => {
    return(
        <View style={styles.container}>
            <SocialGrubs/>
        </View>
    )
}

export default SocialGrubsScreen


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white'
    }
  });