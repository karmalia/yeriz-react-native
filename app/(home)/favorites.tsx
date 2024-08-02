import { StyleSheet } from "react-native";
import * as React from "react";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "react-native";
import { FlatList } from "react-native";
import FoodCard from "@/components/food-card/food-card";
import { EBoxType, TFoodCard } from "@/types";

const dummyData: TFoodCard[] = [
  {
    title: "Harika Sokak Lezzetleri",
    id: "1",
    image:
      "https://media01.stockfood.com/largepreviews/Mzg3NDQ1OTk4/12498258-Various-tomatoes-sage-and-rosemary.jpg",
    boxType: EBoxType[0],
    time: "14:00 - 16:00",
    price: "30 ₺",
    point: "4.5",
  },

  {
    title: "Ahmet Usta'nın Mutfağından",
    id: "2",
    image:
      "https://media01.stockfood.com/largepreviews/Mzg3NDQ1OTk4/12498258-Various-tomatoes-sage-and-rosemary.jpg",
    boxType: EBoxType[1],
    time: "8:00 - 10:00",
    price: "35 ₺",
    point: "3",
  },
  {
    title: "Gevrekçim",
    id: "3",
    image:
      "https://media01.stockfood.com/largepreviews/Mzg3NDQ1OTk4/12498258-Various-tomatoes-sage-and-rosemary.jpg",
    boxType: EBoxType[1],
    time: "8:00 - 10:00",
    price: "10 ₺",
    point: "3.5",
  },
];

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorilerim</Text>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => {
          return (
            <FoodCard
              point={item.point}
              title={item.title}
              boxType={item.boxType}
              time={item.time}
              price={item.price}
              image={item.image}
              id={item.id}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 20,
  },
  title: {
    fontSize: 16,

    textAlign: "left",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
});
