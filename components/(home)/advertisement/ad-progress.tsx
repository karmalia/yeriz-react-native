import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { primaryOne } from "@/constants/colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  length: number;
  progress: number;
};

const AnimatedBall = ({ isActive }: { isActive: boolean }) => {
  const sharedColor = useSharedValue<string>("white");

  useEffect(() => {
    if (isActive) {
      sharedColor.value = withTiming(primaryOne, { duration: 300 });
    } else {
      sharedColor.value = withTiming("white", { duration: 100 });
    }
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: sharedColor.value,
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: 8,
          height: 8,
          borderRadius: 4,

          marginHorizontal: 4,
        },
        animatedStyle,
      ]}
    />
  );
};

const AdProgress = (props: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 8,
        width: "100%",
      }}
    >
      {Array.from({ length: props.length }).map((_, index) => (
        <AnimatedBall key={index} isActive={index === props.progress} />
      ))}
    </View>
  );
};

export default AdProgress;
