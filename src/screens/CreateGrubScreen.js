import { View, Text, StyleSheet } from "react-native";
import CreateGrub from "../components/CreateGrub";

const CreateGrubScreen = () => {
    return (
        <View style={styles.container}>
            <CreateGrub/>
        </View>
    )
}

export default CreateGrubScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    }
  });