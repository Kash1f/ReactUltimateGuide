import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

   const [task, setTask] = useState('')
   const [taskList, setTaskList] = ([])

   const inputHandler = (enteredText) => {
      setTask(enteredText)
   }

   const addTaskButton = () => {
    setTaskList()
   }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={inputHandler} style={styles.inputBox} placeholder='Add Your Tasks'/>
        <Button title="Add Task"></Button>
      </View>
      <View>
        <Text style={styles.textHeading}>Your Tasks: </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15
  },
  inputContainer : {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputBox : {
    width: '75%',
    borderWidth: 1,
    borderColor:'#cccccc',
    borderRadius: 15,
    padding: 5,
    paddingLeft: 15
  },
  textHeading : {
    marginTop:5, 
    fontSize: 15, 
    fontFamily:'sans-serif',
    fontWeight: 'bold',
    marginLeft:8
  }

});
