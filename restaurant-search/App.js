import { View, Text, StyleSheet, FlatList}  from "react-native";
import { StatusBar } from "expo-status-bar";
import Header  from "./src/components/Header";
import Search from "./src/components/Search";
import CategoryItem from "./src/components/CategoryItem";
import { useState } from "react";


export default function App() {
  // this is how we start to render things in the App

  const [term, setTerm ] = useState("Burger");

  const commonCategories = [
    {
      name:"Burger",
      imageUrl: require("./src/assets/images/burger.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/images/pizza.png"),
    },
    {
      name: "Steak",
      imageUrl: require("./src/assets/images/steak.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("./src/assets/images/smoothie.png"),
    },
    {
      name: "Desserts",
      imageUrl: require("./src/assets/images/cake.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("./src/assets/images/pasta.png"),
    }
  ]


  return (
    // elements in here are similar to html, but they are JSX
    <View style={styles.container}>
      <Header />
      <StatusBar/>
      <Search setTerm={setTerm}/>
      {/* <CategoryItem name="burger" imageUrl={require("./src/assets/images/burger.png")}/> */}
     <FlatList 
        data={commonCategories}
        renderItem={ ({ item, index }) => {
          return <CategoryItem 
                  name= {item.name}
                  imageUrl={item.imageUrl}
                  index = {index}
                  active = {item.name === term}
                  handlePress={() => setTerm(item.name)}
          />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor= {(category) => category.name}
     />
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "fff",
  }
})
