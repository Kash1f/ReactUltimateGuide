import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const getApiData = () => {
    //api call
    const url = "https://jsonplaceholder.typecode.com/posts/1"
    const result = fetch(url)
  }
  useEffect(()=>{
    getApiData();
  },[])

  return (
    <View style={styles.container}>
      <Text>Fetch Api!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
