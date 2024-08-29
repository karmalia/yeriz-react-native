import { Dimensions, SectionList, StyleSheet } from "react-native";
import * as React from "react";
import { Text, View } from "react-native";
import Icons from "@/components/shared/icons/icons";
import {
  FlatList,
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import { primaryOne } from "@/constants/colors";
import dummyData from "@/dummy-datas/dummyDataProduct3.json";
import ProductCard from "@/components/cards/product-card";
import ThemedCheckbox from "@/components/shared/themed-checkbox/themed-checkbox";
import ThemedText from "@/components/shared/themed-text/themed-text";
import Poppins from "@/constants/font";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import { useNavigation } from "expo-router";
import NewProductCard from "@/components/cards/new-product-card";
import { StatusBar } from "expo-status-bar";
import FilterList from "@/components/(search)/FilterList";

const initialInputHeight = 60;

export default function SearchPage() {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [searchBar, setSearchBar] = React.useState(true);

  const windowWidth = Dimensions.get("window").width;
  const translateX = useSharedValue(isFilterOpen ? 0 : -windowWidth);
  const height = useSharedValue(initialInputHeight);
  const positionY = useSharedValue(0);
  const navigation = useNavigation();

  React.useEffect(() => {
    translateX.value = withTiming(isFilterOpen ? 0 : -windowWidth, {
      duration: 300,
      easing: Easing.ease,
    });

    const onBlur = navigation.addListener("blur", () => {
      setIsFilterOpen(false);
    });

    return () => {
      navigation.removeListener("blur", onBlur);
    };
  }, [isFilterOpen, windowWidth]);

  React.useEffect(() => {
    if (searchBar) {
      console.log("1");
      height.value = withTiming(initialInputHeight, {
        duration: 300,
        easing: Easing.ease,
      });
      positionY.value = withTiming(0, {
        duration: 300,
        easing: Easing.ease,
      });
    }

    if (!searchBar) {
      console.log("2");
      height.value = withTiming(0, {
        duration: 300,
        easing: Easing.ease,
      });
      positionY.value = withTiming(-50, {
        duration: 300,
        easing: Easing.ease,
      });
    }
  }, [searchBar]);

  const filterStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const inputStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [{ translateY: positionY.value }],
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar backgroundColor="white" />
      <Animated.View
        style={[
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            height: initialInputHeight,
            transform: [{ translateY: 0 }],
            width: Dimensions.get("window").width * 0.9,
            overflow: "hidden",
          },
          inputStyle,
        ]}
      >
        <TouchableOpacity
          style={{
            width: 40,
          }}
          onPress={() => setIsFilterOpen((prev) => !prev)}
        >
          <Icons.FilterIcon width={40} height={40} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            marginBottom: 4,
          }}
        >
          <ThemedInput
            placeholder="Ne Yesem?"
            style={{
              borderColor: primaryOne,
              height: initialInputHeight - 20,
              borderWidth: 1,
            }}
            rightIcon={"SearchIcon"}
          />
        </View>
      </Animated.View>

      <View
        style={{
          flex: 1,
          width: "100%",
          position: "relative",
        }}
      >
        <FilterList data={dummyData} setFilterState={setSearchBar} />

        <Animated.View style={[styles.filterModal, filterStyle]}>
          <View
            style={{
              flex: 1,
              position: "relative",
            }}
          >
            <SectionList
              sections={[
                {
                  title: "Kategoriler",
                  data: [
                    "Ana Yemek",
                    "Çorba",
                    "Sebze Yemekleri",
                    "Tatlı",
                    "Fırın / Pastane Ürünleri",
                  ],
                },
                {
                  title: "Diyet Türü",
                  data: ["Vegan", "Vejetaryen", "Glutensiz"],
                },
              ]}
              contentContainerStyle={{
                backgroundColor: "white",
                position: "absolute",
              }}
              renderItem={({ item }) => (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingLeft: 24,
                    paddingBottom: 10,
                  }}
                >
                  <ThemedCheckbox label={item} value={item} />
                </View>
              )}
              renderSectionHeader={({ section }) => (
                <View>
                  <ThemedText
                    style={{
                      fontSize: 20,
                      paddingLeft: 24,
                      textAlign: "left",
                      fontFamily: Poppins.Medium,
                      color: primaryOne,
                    }}
                  >
                    {section.title}
                  </ThemedText>
                </View>
              )}
              keyExtractor={(item, index) => item + index}
              SectionSeparatorComponent={() => <View style={{ height: 10 }} />}
            />

            <TouchableOpacity
              onPress={() => setIsFilterOpen((prev) => !prev)}
              style={{
                height: 40,
                width: 40,

                position: "absolute",
                top: 30,
                zIndex: 12,
                right: 0,
                backgroundColor: "black",
              }}
            >
              <Icons.CloseIcon width={20} height={20} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  filterModal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flex: 1,
    width: Dimensions.get("window").width, // Use dynamic width
    height: "100%",
    backgroundColor: "white",
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
  },
  search: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
