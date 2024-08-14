import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import socialGrubStyles from '../SocialGrubs/styles'
import { useNavigation } from "@react-navigation/native";

const CreateGrub = () => {
    const navigation = useNavigation()
    return(
        <View style={styles.createGrubScreen}>
            <View style={socialGrubStyles.headerContainer}>
                <Text style={socialGrubStyles.socialGrubs}>Create Grub</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={socialGrubStyles.homeButton}>
                    <Text style={socialGrubStyles.homeButtonText}>Back To SocialGrubs</Text>
                </TouchableOpacity>
            </View>


            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} multiline={true} placeholder="Type Something"/>
                </View>

                <TouchableOpacity style={styles.uploadImageButton}>
                    <Text style={styles.uploadImage}>Upload Image</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.postButton}>
                    <Text style={styles.postText}>Post Grub</Text>
                </TouchableOpacity>
            </View>
            

            
        </View>
    )
}

export default CreateGrub