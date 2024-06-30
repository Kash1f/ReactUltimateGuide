import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  Alert,
} from "react-native";
import TaskList from "./src/components/TaskList";

export default function App() {

  //using useState to handle state of the app
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const inputHandler = (enteredText) => {
    setTask(enteredText);
  };

  const addTaskButton = () => {
    if (!task) {
      return Alert.alert("Please Add Task");
    }
    //providing id here will add tasks with unique id, an object with task and id will be created, math.random will generate unqiue random ids
    setTaskList((prevTask) => [...prevTask, {task: task, id: Math.random().toString() }]);
  };

  return (

    //JSX
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={inputHandler}
          style={styles.inputBox}
          placeholder="Add Your Tasks"
        />
        <Button onPress={addTaskButton} title="Add Task"></Button>
      </View>

      {/* Conditional rendering to display No task heading when ther is none, if added then Text will change to the textHeading i.e Your Tasks */}

      {taskList.length > 0 ? (
        <Text style={styles.textHeading}>Your Tasks: </Text>
      ) : (
        <Text style={styles.textHeading}>
          No Tasks, Enter above to add your task
        </Text>
      )}

      {/* Rendering list using FlatList */}

      <FlatList
        data={taskList}
        renderItem={({ item, index }) => (
          //passing item and index as props
          <TaskList item={item} index={index} />
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

-Create a View container as it will be the main View.
-Create another View for Input and Button.

Till here add and delete functionality will be created.

1. Add Functionality in Todo:
--We will first create two state variables, task and taskList. Task will have the entered task while taskList will have the current and previous list

2. Delete Functionality in Todo:

-To delete any item from the list. Consdider that mujhe task 3 ko delete karna hai, jese hi uspe click ho to task delete hojai. To delete task humay id required hoti hai, because agar hum directly task delete karengy to hamare pas koi unique id nahi hai jiski base pe hum bata saken k humay konsi field ya task ko delete karna hai, id k baghair name k base pe confusion ho sakta hai, agar id use nahi hogi to koi sa bhi item ya puri list delete hojaigi


--Map Method to Render each list:--

<ScrollView>

 {taskList?.map((item, index)=>(
              <Text style={styles.taskItem} key={index}>{item}</Text>
            ))}
</ScrollView>

--How FlatList works:--

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
