import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';

export default function App() {

   const [task, setTask] = useState('')
   const [taskList, setTaskList] = useState([])

   const inputHandler = (enteredText) => {
      setTask(enteredText)
   }

   const addTaskButton = () => {
    setTaskList((prevTask) => [...prevTask, task])
   }

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={inputHandler} style={styles.inputBox} placeholder='Add Your Tasks'/>
        <Button onPress={addTaskButton}title="Add Task"></Button>
      </View>
      <View>
        <Text style={styles.textHeading}>Your Tasks: </Text>
        <View>
            {taskList?.map((item, index)=>(
              <Text style={styles.taskItem} key={index}>{item}</Text>
            ))}
        </View>
      </View>
    </View>
    </ScrollView>
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
  },
  taskItem:{
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "green",
    color: "#FFFFFF",
    fontWeight:"bold"
  }

});


//TODO LIST:

/*

--

*/