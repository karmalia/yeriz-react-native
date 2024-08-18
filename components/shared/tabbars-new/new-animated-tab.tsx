import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AnimatedTabIcon } from "../icons/animated-tab-icon";
import Icons from "../icons/icons";
import { useIsFocused } from "@react-navigation/native";
import { primaryOne, secondaryOne } from "@/constants/colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";

export const tabStyles = StyleSheet.create({
  tabBarIconStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 40,
    borderRadius: 100,
  },
});

const NewAnimatedTab = ({
  children,
}: {
  children: (isFocused: boolean) => JSX.Element;
}) => {
  const isFocushed = useIsFocused();

  const backgroundColor = useSharedValue(false);
  const width = useSharedValue(isFocushed ? 150 : 90);

  // Animate on focus change
  React.useEffect(() => {
    width.value = withTiming(isFocushed ? 150 : 90, {
      duration: 300,
      easing: Easing.linear,
    });

    backgroundColor.value = isFocushed ? true : false;
  }, [isFocushed]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value ? primaryOne : "transparent",
    };
  });

  return (
    <Animated.View style={[tabStyles.tabBarIconStyle, animatedStyle]}>
      {children(isFocushed)}
    </Animated.View>
  );
};

export default NewAnimatedTab;
