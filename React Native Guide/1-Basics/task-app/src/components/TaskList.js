import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TaskList = ({item, index}) => {
  return (
    <View>
      <Text style={styles.taskItem} key={index}>
        {item}
      </Text>
    </View>
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
