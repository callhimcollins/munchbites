import { View, Text, Image, TouchableOpacity } from "react-native";
import users from '../../../assets/data/users.json'
import styles from "./styles";


const user = users[0]
const UserProfile = () => {
    return (
        <View style={styles.profileScreen}>
            <TouchableOpacity style={styles.profileHeader}>
                <View style={styles.userImageContainer}>
                    <Image style={styles.userImage} source={{ uri: user.image }} />
                </View>
                <Text style={styles.userName}>{ user.lastName } { user.firstName }</Text>
            </TouchableOpacity>


            <View style={styles.addressSection}>
                <TouchableOpacity style={styles.homeAddressButton}>
                    <Text style={styles.addressText}>Home Address</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.workAddressButton}>
                    <Text style={styles.addressText}>Work Address</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.amountContainer}>
                <Text style={styles.amountText}>Total Amount Spent: <Text style={styles.amount}>N39,500</Text></Text>
            </View>

            <View>
                <TouchableOpacity style={styles.referBox}>
                    <Text style={styles.referText}>Tap This Box To Refer A Friend And Get A Free Lunch To Your Doorstep!</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default UserProfile