import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Product from './components/Product';

export default function App() {

  const products = [
    {
      name: "Samsung Galaxy",
      color: "White",
      price: "$300",
      image:""
    },
    {
      name: "Apple Iphone",
      color: "White",
      price: "$300",
      image:""
    },
    {
      name: "Sony Xperia",
      color: "White",
      price: "$300",
      image:""
    },
    {
      name: "Huawei Mate",
      color: "White",
      price: "$300",
      image:""
    }
  ]



  return (
    <View style={styles.container}>
         <Header/>
         <Product/>
    
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
