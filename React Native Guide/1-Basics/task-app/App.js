import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const inputHandler = (enteredText) => {
    setTask(enteredText);
  };

  const addTaskButton = () => {
    setTaskList((prevTask) => [...prevTask, task]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={inputHandler}
          style={styles.inputBox}
          placeholder="Add Your Tasks"/>
        <Button onPress={addTaskButton} title="Add Task"></Button>
      </View>

      <Text style={styles.textHeading}>Your Tasks: </Text>

      <FlatList
        data={taskList}
        renderItem={({ item, index }) => (
          <Text style={styles.taskItem} key={index}>
            {item}
          </Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBox: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 15,
    padding: 5,
    paddingLeft: 15,
  },
  textHeading: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginLeft: 8,

  },

});

//TODO LIST:

/*

--

<ScrollView>
using map before we used FlatList
 {taskList?.map((item, index)=>(
              <Text style={styles.taskItem} key={index}>{item}</Text>
            ))}
</ScrollView>

How FlatList works:

1. Accessing data:

data={taskList}
In this example we are accessing data from the state so we will pass the state variable to the data property.

2. Rendering the data/list:
renderItem={({ item, index }) => (
          <Text style={styles.taskItem} key={index}>{item}</Text>
        )}

A callback function is passed inside renderItem function. In this callback function we can extract the data from the state variable i.e taskList by object destructuring({item, index}) like the map method as the map method also extracts single item and index from the data by which we can access it, so we will extract the taskList using data property and will render the data inside the taskList using item. Also, we get the index to number the data.
Now we can display the data by using return() or by arrow function.




*/
