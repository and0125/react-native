import { View, Text, StyleSheet}  from "react-native";
import { StatusBar } from "expo-status-bar";
import Header  from "./src/components/Header";
import Search from "./src/components/Search";


export default function App() {
  // this is how we start to render things in the App
  return (
    // elements in here are similar to html, but they are JSX
    <View style={styles.container}>
            <Header />
      <Text>This is all we need to run the app</Text>
      <StatusBar/>
      <Search />
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "fff",
  }
})
