import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Text style={styles.header}>0</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
  fontSize:22,
  textAlign:'right',
  padding:10,
  backgroundColor:'orange'
},

})