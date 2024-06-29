import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TaskList = () => {
  return (
    <View>
    <Text style={styles.taskItem} key={index}>
            {item}
          </Text>
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({})