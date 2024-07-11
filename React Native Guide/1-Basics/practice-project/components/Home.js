import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
      <Text style={{fontSize:20}}> Welcome to Movie App</Text>
      <View style={styles.movieBtn}>
      <Button color={"brown"} title='Explore Movies'
      onPress={()=>navigation.navigate('Movie')}
      />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  movieBtn:{
    width: "50%",
    marginTop:20
  
  }
})