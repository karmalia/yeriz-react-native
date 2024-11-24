import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from "react-native-gesture-handler";
import { natural30, natural40, primaryOne } from "@/constants/colors";
import AllFilters from "./all-filters";
import FilterStoreContents from "./filterstore-contents";
import Mulish from "@/constants/font";
import useFilterStore from "@/stores/filterStore";
import Icons from "../icons/icons";

enum EContentNames {
  orderings = "Sıralama",
  kitchens = "Mutfak",
  paymentTypes = "Ödeme Türleri",
  minOrderAmounts = "Minimum Sepet Tutarı",
  filterByPoint = "Puan",
}

const FilterOrderBar = () => {
  const [contentHeight, setContentHeight] = useState(0);
  const [actionBarHeight, setActionBarHeight] = useState(0);
  const maxActionBarHeight = Dimensions.get("window").height * 0.9;

  const filterStore = useFilterStore();
  console.log("content filterStore", filterStore.content);

  const translateY = useSharedValue(0);

  const headerHeight = Dimensions.get("window").height * 0.1;
  const footerHeight = 74;

  const threshold = actionBarHeight * 0.25;

  useEffect(() => {
    const totalHeight = headerHeight + contentHeight + footerHeight;

    if (totalHeight > maxActionBarHeight) {
      setActionBarHeight(maxActionBarHeight);
    } else {
      setActionBarHeight(totalHeight);
    }
  }, [contentHeight]);

  const pan = Gesture.Pan()
    .onStart((event) => {
      translateY.value = event.translationY;
    })
    .onUpdate((event) => {
      translateY.value = -actionBarHeight + event.translationY;
    })
    .onEnd((event) => {
      if (event.translationY > threshold) {
        runOnJS(filterStore.toogleActionBar)(false);
      } else {
        translateY.value = withTiming(-actionBarHeight, {
          duration: 300,
          easing: Easing.out(Easing.ease),
        });
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    if (filterStore.isActive && actionBarHeight > 0) {
      translateY.value = withTiming(-actionBarHeight, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      translateY.value = withTiming(0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [filterStore.isActive, actionBarHeight]);

  return (
    <>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: filterStore.isActive ? "flex" : "none",
        }}
      />
      {actionBarHeight > 0 && (
        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: -actionBarHeight,
              left: 0,
              height: actionBarHeight,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              backgroundColor: "white",
              justifyContent: "space-between",
              right: 0,
              overflow: "hidden",
            },
            animatedStyle,
          ]}
        >
          <GestureDetector gesture={pan}>
            <View
              style={{
                height: headerHeight,
                backgroundColor: "white",
                elevation: 4,
                width: "100%",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: -5,
                  left: 0,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icons.ActionBarHandler
                  color={natural30}
                  width={Dimensions.get("window").width * 0.8}
                  height={20}
                />
              </View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 12,
                  top: 0,
                  transform: [
                    { translateY: Dimensions.get("window").height * 0.05 - 8 },
                  ],
                }}
                onPress={() => {
                  filterStore.toogleActionBar(false);
                }}
              >
                <Icons.CloseIcon color={primaryOne} width={16} height={16} />
              </TouchableOpacity>

              <Text
                style={{
                  color: primaryOne,
                  textAlign: "center",
                  fontSize: 22,
                  fontFamily: Mulish.SemiBold,
                  letterSpacing: 1,
                }}
              >
                {EContentNames[filterStore.content]}
              </Text>
            </View>
          </GestureDetector>

          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 12,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
            style={{
              maxHeight: actionBarHeight - headerHeight - footerHeight,
              paddingTop: 12,
              paddingBottom: 12,
            }}
          >
            {/* Remove the wrapping View or adjust its styles */}
            <View
              onLayout={(event) => {
                const { height } = event.nativeEvent.layout;
                setContentHeight(height);
              }}
              style={{
                paddingBottom: 20,
              }}
            >
              {filterStore.content !== "filters" && <FilterStoreContents />}
              {filterStore.content === "filters" && <AllFilters />}
            </View>
          </ScrollView>

          <View
            style={{
              width: "100%",
              backgroundColor: "white",
              elevation: 4,
              paddingTop: 12,
              borderWidth: 1,
              borderColor: natural40,
            }}
          >
            <TouchableOpacity
              style={{
                width: "95%",
                alignSelf: "center",
                borderRadius: 8,
                height: 50,
                marginBottom: 12,
                backgroundColor: primaryOne,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                filterStore.toogleActionBar(false);
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontFamily: Mulish.SemiBold,
                  letterSpacing: 1,
                }}
              >
                UYGULA
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </>
  );
};

export default FilterOrderBar;
