import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import dummyDataProduct from "../../dummy-datas/dummyDataProduct.json";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import ProductCard from "@/components/cards/product-card";
import ThemedText from "@/components/shared/themed-text/themed-text";
import Poppins from "@/constants/font";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import Constants from "expo-constants";
import Icons from "@/components/shared/icons/icons";
import { primaryOne } from "@/constants/colors";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const ListcardModals = () => {
  const [isModalVisible, setModalVisible] = React.useState(true);
  const bottomPosition = useSharedValue(-160);

  React.useEffect(() => {
    bottomPosition.value = withTiming(isModalVisible ? 0 : -160, {
      duration: 300,
      easing: Easing.linear,
    });
  }, [isModalVisible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      bottom: bottomPosition.value,
    };
  });

  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <GestureHandlerRootView>
      <View
        style={{
          marginTop: Constants.statusBarHeight,
          height: 60,
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 1,
          marginBottom: 10,
          borderBottomColor: "#e0e0e0",
        }}
      >
        <Icons.CloseIcon
          width={24}
          height={24}
          style={{ color: primaryOne, marginLeft: 20 }}
          onPress={() => router.back()}
        />
        <ThemedText
          style={{
            fontSize: 20,

            textAlign: "left",
            fontFamily: Poppins.SemiBold,
            marginVertical: 10,
            color: "black",
            paddingHorizontal: 20,
          }}
        >
          {params.title || "Error: Section Title is missing"}
        </ThemedText>
        <Text
          style={{
            marginTop: 20,
          }}
          onPress={() => setModalVisible(!isModalVisible)}
        >
          open
        </Text>
      </View>
      <View>
        <FlatList
          data={dummyDataProduct}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <ProductCard data={item} variant="large" />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
      {isModalVisible && (
        <View
          style={{
            height: Dimensions.get("window").height,
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "absolute",
            bottom: 0,
            width: "100%",
            zIndex: 1,
          }}
        >
          <Text
            style={{
              marginTop: 20,
            }}
            onPress={() => setModalVisible(!isModalVisible)}
          >
            open
          </Text>
          <Animated.View style={[styles.modal, animatedStyle]}></Animated.View>
        </View>
      )}
    </GestureHandlerRootView>
  );
};

export default ListcardModals;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center", // Center the cards horizontally
    justifyContent: "center", // Center the cards vertically
    width: "100%", // Make the container take the full width
    paddingBottom: 20, // Add some vertical spacing between the cards
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: "center", // Center the FlatList content vertically if it doesn't fill the screen
  },
  modal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 2,
    height: 160,
  },
});
