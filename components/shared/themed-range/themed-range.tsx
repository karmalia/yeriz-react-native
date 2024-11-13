import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SharedValue } from "react-native-reanimated";
import { Slider } from "react-native-awesome-slider";

import { natural40, primaryOne, secondaryOne } from "@/constants/colors";
import useDebounce from "@/lib/custom-hooks/useDebounce";
import calculateDeltas from "@/lib/utils/calculateDelta";

type Props = {
  progress: SharedValue<number>;
  min: SharedValue<number>;
  max: SharedValue<number>;
  onChange: (value: number) => void;
  onSlidingStart?: () => void;
  onSlidingComplete?: () => void;
};

/*
    Usage:
    const progress = useSharedValue(30);
    const min = useSharedValue(0);
    const max = useSharedValue(100);

*/

const ThemedRange = ({
  progress,
  min,
  max,
  onChange,
  onSlidingComplete,
  onSlidingStart,
}: Props) => {
  return (
    <Slider
      style={{
        width: "100%",
      }}
      progress={progress}
      minimumValue={min}
      maximumValue={max}
      onValueChange={onChange}
      renderBubble={() => null}
      renderThumb={() => (
        <View
          style={{
            width: 15,
            height: 15,
            backgroundColor: secondaryOne,
            borderRadius: 6,
          }}
        />
      )}
      containerStyle={{
        borderRadius: 8,
      }}
      //For backend integration
      onSlidingComplete={onSlidingComplete}
      onSlidingStart={onSlidingStart}
      theme={{
        disableMinTrackTintColor: "red",
        maximumTrackTintColor: natural40,
        minimumTrackTintColor: primaryOne,
        cacheTrackTintColor: "gray",

        heartbeatColor: "blue",
      }}
    />
  );
};

export default ThemedRange;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
  },
});
