import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Movie = () => {

  const [searchText, setSearchText] = useState('')

  //handle input -> This will let the latest text to 
  const handleInputChangeText = (inputText) => {
    setSearchText(inputText)
  }

  //handle button press -> Will pass the entered value in the input field
  const handleButtonPress = () => {
    console.log(searchText)}

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <TextInput style={styles.searchIn} placeholder="Find a movie"
        value={searchText}
        onChangeText={handleInputChangeText}
        />
  
        <Button title="Search" onPress={handleButtonPress} />
      
      </View>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA07A", // Background color applied to fill the entire screen
    paddingHorizontal: 10,
    paddingTop:20
  },
  secondContainer: {
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center',

  },
  searchIn: {
    flex:1,
    fontSize: 17,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    padding: 5,
    marginRight:10,
    borderWidth:1,
    borderColor:'#cccc',
    borderRadius:3
  
  },
});
