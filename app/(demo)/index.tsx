import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";

import ScreenWrapper from "@/components/shared/demo-wrap";
import { primaryOne } from "@/constants/colors";
import { useNavigation } from "expo-router";
import Icons from "@/components/shared/icons/icons";

const DemoIndexPage = () => {
  const navigate = useNavigation();

  return (
    <ScreenWrapper>
      <Image
        source={require("@/assets/images/favicon.png")}
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
          marginVertical: 20,
        }}
      />
      <Text style={styles.headerText}>
        Bu Kısım Component demoları içindir, Hamburger menüden diğer sayfalara
        ulaşabilirsiniz.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: 20,
        }}
      >
        <Button title="LOGIN" onPress={() => navigate.navigate("(login)")} />
        <Button title="HOME" onPress={() => navigate.navigate("(home)")} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  todoContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    height: 40,
    borderWidth: 1,
    borderColor: primaryOne,
  },
  checkedText: {
    textDecorationLine: "line-through",
    marginLeft: 10,
    fontSize: 16,
    color: "white",
  },
  uncheckedText: {
    color: "black",
    marginLeft: 10,
    fontSize: 16,
  },
});

export default DemoIndexPage;
