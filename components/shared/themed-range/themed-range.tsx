import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  SharedValue,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { Slider } from "react-native-awesome-slider";

import { natural40, primaryOne, secondaryOne } from "@/constants/colors";
import useDebounce from "@/lib/custom-hooks/useDebounce";
import calculateDeltas from "@/lib/utils/calculateDelta";

type ThemedRangeProps = {
  onSlidingStart?: (value: number) => void;
  onSlidingComplete?: (value: number) => void;
  min: SharedValue<number>;
  max: SharedValue<number>;
  progress: SharedValue<number>;
};

/*
    Usage:
    const progress = useSharedValue(30);
    const min = useSharedValue(0);
    const max = useSharedValue(100);

*/

const ThemedRange = ({
  min,
  max,
  progress,

  onSlidingComplete,
  onSlidingStart,
}: ThemedRangeProps) => {
  return (
    <View style={styles.container}>
      <Slider
        style={{
          width: "100%",
        }}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        onValueChange={(value) => {
          progress.value = value;
        }}
        step={24}
        steps={25}
        renderBubble={() => null}
        renderMark={() => null}
        renderThumb={() => (
          <View
            style={{
              width: 25,
              height: 25,
              backgroundColor: secondaryOne,
              borderRadius: 25,
              elevation: 5,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}
          />
        )}
        containerStyle={{
          borderRadius: 8,
        }}
        onSlidingComplete={onSlidingComplete}
        onSlidingStart={onSlidingStart}
        theme={{
          maximumTrackTintColor: natural40,
          minimumTrackTintColor: primaryOne,
        }}
      />
    </View>
  );
};

export default ThemedRange;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
  },
  progressText: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
    color: primaryOne,
  },
});
