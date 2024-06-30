import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";

const TaskList = ({ item, index, handleDelete }) => {
  return (
    
      <Pressable onPress={handleDelete.bind(this, item.id)}>
      <Text style={styles.taskItem}>
      {index + 1} : {item.task}
      </Text>
     </Pressable>
    
  );
};

export default TaskList;

const styles = StyleSheet.create({
  taskItem: {
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "green",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
