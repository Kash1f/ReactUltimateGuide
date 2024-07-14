import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import Header from "./components/Header";
import Product from "./components/Product";

export default function App() {
  const products = [
    {
      id:1,
      name: "Samsung Galaxy S24",
      color: "Black",
      price: "$1200",
      image:
        "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png",
    },
    {
      id:2,
      name: "Apple Iphone 15 Pro",
      color: "Black",
      price: "$1300",
      image:
        "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png",
    },
    {
      id:3,
      name: "Samsung Galaxy Z Fold",
      color: "White",
      price: "$800",
      image:
        "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png",
    },
    {
      id:4,
      name: "Ipad Pro",
      color: "Space Grey",
      price: "$1000",
      image:
        "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        {products.map((item, index) => (
          <View style={styles.itemContainer}>
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text style={{ fontSize: 16 }}>{item.color}</Text>
            <Text style={{ fontSize: 16 }}>{item.price}</Text>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: item.image }}
            />
            <View style={{ marginHorizontal: 20 }}>
              <Button title="Add to Cart" />
            </View>
          </View>
        ))}
      </ScrollView>
      <Product />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "lightblue",
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderBottomColor: "brown",
    borderBottomWidth: 2,
  },
});
