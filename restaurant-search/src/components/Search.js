import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/styles";


export default function Search() {
    return (
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name="search" size={25} />
            <TextInput  style={styles.textInput}
                placeholder="Restaurant, Food" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 15,
        marginHorizontal: 50,
        backgroundColor:"white",
        padding: 3,
        borderRadius: 50,
    },
    elevation,
    textInput: {
        fontSize: 20,
        marginLeft: 10,
    },
})