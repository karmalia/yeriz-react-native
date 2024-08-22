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
import dummyData from "@/dummy-datas/dummyDataProduct2.json";
import ProductCard from "@/components/cards/product-card";
import ThemedCheckbox from "@/components/shared/themed-checkbox/themed-checkbox";
import ThemedText from "@/components/shared/themed-text/themed-text";
import Poppins from "@/constants/font";
import ThemedButton from "@/components/shared/themed-button/themed-button";

export default function SearchPage() {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const windowWidth = Dimensions.get("window").width;
  const translateX = useSharedValue(isFilterOpen ? 0 : -windowWidth);

  React.useEffect(() => {
    translateX.value = withTiming(isFilterOpen ? 0 : -windowWidth, {
      duration: 300,
      easing: Easing.ease,
    });
  }, [isFilterOpen, windowWidth]);

  const filterStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
            height: "10%",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity onPress={() => setIsFilterOpen((prev) => !prev)}>
            <Icons.FilterIcon width={40} height={40} />
          </TouchableOpacity>

          <View style={styles.search}>
            <ThemedInput
              placeholder="Ne Yesem?"
              style={{
                borderRadius: 8,
                borderColor: primaryOne,
                height: 40,
              }}
              rightIcon={"SearchIcon"}
            />
          </View>
        </View>
        <FlatList
          data={dummyData}
          renderItem={({ item }) => <ProductCard data={item} variant="big" />}
          keyExtractor={(item) => item.id + "search"}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </View>

      {/* Filter */}
      <Animated.View style={[styles.filterModal, filterStyle]}>
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
                  paddingBottom: 10,
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
        <View
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "row",
            justifyContent: "center",
            height: 180,
          }}
        >
          <ThemedButton
            size="medium"
            variant="primary"
            onPress={() => setIsFilterOpen((prev) => !prev)}
            style={{
              backgroundColor: primaryOne,
              marginTop: 10,
              paddingHorizontal: 40,
              borderRadius: 12,
            }}
          >
            <ThemedText style={{ color: "white", fontSize: 12 }}>
              Seçimi Onayla
            </ThemedText>
          </ThemedButton>
        </View>
      </Animated.View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  filterModal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    transform: [{ translateX: Dimensions.get("window").width }],
    width: Dimensions.get("window").width, // Use dynamic width
    height: "90%",
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
    flex: 1,
  },
});
