import { Dimensions, SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "expo-router";
import ThemedCheckbox from "@/components/shared/themed-checkbox/themed-checkbox";
import { primaryOne } from "@/constants/colors";
import Mulish from "@/constants/font";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icons from "@/components/shared/icons/icons";

export const styles = StyleSheet.create({
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

const FilterSidebar = ({
  isFilterOpen,
  setFilterIsOpen,
}: {
  isFilterOpen: boolean;
  setFilterIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const windowWidth = Dimensions.get("window").width;
  const translateX = useSharedValue(isFilterOpen ? 0 : -windowWidth);

  const filterStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  React.useEffect(() => {
    translateX.value = withTiming(isFilterOpen ? 0 : -windowWidth, {
      duration: 400,
      easing: Easing.elastic(1),
    });
  }, [isFilterOpen, windowWidth]);

  return (
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
                  fontFamily: Mulish.Medium,
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
          onPress={() => setFilterIsOpen((prev) => !prev)}
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
  );
};

export default FilterSidebar;
