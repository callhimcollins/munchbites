import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './styles'
import users from '../../../../assets/data/users.json'
import moment from "moment/moment";
 

// const user = users[0]
const SocialBox = ({socialgrub}) => {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.boxContainer}>

                <View style={styles.userContainer}>
                    <View style={styles.userDetail}>
                        <Image style={styles.userImage} source={{ uri: socialgrub.image }}/>
                        <Text style={styles.usernameText}>{ socialgrub.user }</Text>
                    </View>
                    <Text style={styles.dateText}>{moment(socialgrub.createdAt).fromNow()}</Text>
                </View>


                { !!socialgrub.image && <View style={styles.boxImageContainer}>
                    <Image style={styles.boxImage} source={{ uri: socialgrub.image }}/>
                </View>}


                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>{ socialgrub.content }</Text>
                </View>

                <View style={styles.likeContainer}>
                    <Text style={styles.numberLiked}>Number Of People Liked: { socialgrub.numberOfLikes }</Text>
                    <TouchableOpacity style={styles.likeButton}>
                        <Text style={styles.likeText}>Like</Text>
                    </TouchableOpacity>
                </View>


            </View>

            
        </View>
    )
}


export default SocialBox;
