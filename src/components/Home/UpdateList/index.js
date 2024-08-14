import styles from "./styles";
import updates from '../../../../assets/data/updates.json'
import { View, Text, ScrollView, Image } from "react-native";

const UpdateList = () => {
    return(
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {updates.map((item) => {
                return(
                <Image style={styles.image} source={{ uri: item }}/>
                )
            })}
        </ScrollView>
    )
}

export default UpdateList