import { View, Text, Image } from "react-native";
import styles from "./styles";

const CityWord = (props) => {
    return (
        <View style={styles.wordContainer}>
            <Text style={styles.wordText}>{props.word}</Text>
            <Image style={styles.wordImage} source={require('../../../assets/citygrubslogodark.png')}/>
        </View>
    )
}

export default CityWord