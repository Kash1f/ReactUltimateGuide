import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>

      <Text style={{fontSize:20}}>Welcome to Movies App</Text>

      <View style={styles.movieBtn}>

        <Button color={'brown'} title="Explore Movies"
        onPress={()=>navigation.navigate('Movie')}
        />
        
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  movieBtn : {
    marginTop: 20
  }

})