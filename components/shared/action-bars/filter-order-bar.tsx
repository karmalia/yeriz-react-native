import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
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
import { primaryFive, primaryOne } from "@/constants/colors";
import Icons from "../icons/icons";
import useFilterStore from "@/stores/filterStore";
import Mulish from "@/constants/font";

const filterOrderBarHeight = Dimensions.get("window").height * 0.4;
const threshold = filterOrderBarHeight * 0.25;

enum FilterTitle {
  "orderings" = "Sıralama",
  "kitchens" = "Mutfaklar",
  "paymentTypes" = "Ödeme Türleri",
  "minOrderAmounts" = "Minimum Sipariş Tutarı",
  "filterByPoint" = "Puan",
}

const FilterOrderBar = () => {
  // Ensure orderingTypes contains only the enum values
  const filterStore = useFilterStore();

  const translateY = useSharedValue(0);

  const pan = Gesture.Pan()
    .onStart((event) => {
      translateY.value = event.translationY;
    })
    .onUpdate((event) => {
      translateY.value = -filterOrderBarHeight + event.translationY;
      console.log("translateY", translateY.value);
    })
    .onEnd((event) => {
      if (event.translationY > threshold) {
        runOnJS(filterStore.changeFilterStatus)(false);
      } else {
        translateY.value = withTiming(-filterOrderBarHeight, {
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
    if (filterStore.isActive) {
      translateY.value = withTiming(-filterOrderBarHeight, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      translateY.value = withTiming(0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [filterStore.isActive]);

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

      <Animated.View
        style={[
          {
            position: "absolute",
            bottom: -filterOrderBarHeight,
            left: 0,
            height: filterOrderBarHeight,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: "white",
            justifyContent: "space-between",
            right: 0,

            overflow: "hidden",
            // shadowColor: "#000",
            // shadowOffset: {
            //   width: 0,
            //   height: 4,
            // },
            // shadowOpacity: 0.3,
            // shadowRadius: 4.65,
            // elevation: 8,
          },
          animatedStyle,
        ]}
      >
        <GestureDetector gesture={pan}>
          <View
            style={{
              height: 50,
              backgroundColor: "white",
              elevation: 4,
              width: "100%",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 12,
                top: 0,
                transform: [{ translateY: 50 / 2 - 20 / 2 }],
              }}
              onPress={() => {
                filterStore.changeFilterStatus(false);
              }}
            >
              <Icons.CloseIcon color={primaryOne} width={20} height={20} />
            </TouchableOpacity>

            <Text
              style={{
                color: primaryOne,
                textAlign: "center",
                fontSize: 22,
              }}
            >
              {FilterTitle[filterStore.content]}
            </Text>
          </View>
        </GestureDetector>

        <View
          style={{
            flex: 1,
            paddingVertical: 12,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start", // Adjust as needed
              paddingHorizontal: 12,
              gap: 12,
            }}
            style={{
              width: "100%",
            }}
          >
            {filterStore[filterStore.content].data.map((orderItem) => (
              <TouchableOpacity
                onPress={() => {
                  filterStore.changeOrdering(orderItem);
                }}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  borderRadius: 8,
                  backgroundColor: orderItem.isActive ? primaryFive : "white",
                  borderWidth: 1,
                  borderColor: primaryOne,
                }}
                key={orderItem.name}
              >
                <Text
                  style={{
                    color: primaryOne,
                  }}
                >
                  {orderItem.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

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
            filterStore.changeFilterStatus(false);
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
      </Animated.View>
    </>
  );
};

export default FilterOrderBar;
