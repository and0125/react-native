import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/styles";
import { useState } from "react";

export default function Search({setTerm}) {

    const [input, setInput] = useState("");

    const handleEndEditing = () => {
        if (!input) return
        setTerm(input);
        setInput("");
    }

    return (
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name="search" size={25} />
            <TextInput  
                style={styles.textInput}
                placeholder="Restaurant, Food" 
                value={input}
                onChangeText={
                    (text) => {setInput(text)
                    }}
                onEndEditing={handleEndEditing}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 15,
        marginHorizontal: 10,
        backgroundColor:"white",
        padding: 5,
        borderRadius: 50,
    },
    elevation,
    textInput: {
        fontSize: 20,
        marginLeft: 10,
    },
})