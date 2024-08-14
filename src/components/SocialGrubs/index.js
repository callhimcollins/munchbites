import { View, Text, FlatList, TouchableOpacity } from "react-native";
import SocialBox from "./SocialBox";
import socialgrubs from '../../../assets/data/socialgrubs.json'
import users from '../../../assets/data/users.json'
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const SocialGrubs = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.socialGrubsContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.socialGrubs}>SocialGrubs</Text>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.homeButton}>
                    <Text style={styles.homeButtonText}>Go Back Home</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('CreateGrubScreen')} style={styles.createGrub}>
                <Text style={styles.grubText}>Grub</Text>
            </TouchableOpacity>
            <FlatList
            data={socialgrubs}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return (
                    <SocialBox socialgrub={item}/>
                )
            }}
            />
        </View>
    )
}

export default SocialGrubs;