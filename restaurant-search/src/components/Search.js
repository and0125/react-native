import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "./src/common/styles";


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
        marginHorizontal: 25,
        backgroundColor:"white",
        padding: 10,
        borderRadius: 50,
    },
    elevation,
    input: {
        fontSize: 30,
        marginLeft: 10,
    },
})