import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { secondaryOne, tertiaryOne, tertiaryThree } from "@/constants/colors";

type Props = {
  stage: number;
};

const BasketProgress = (props: Props) => {
  const progress = useSharedValue(10);
  const stageTwoColor = useSharedValue(0);
  const stageThreeColor = useSharedValue(0);

  React.useEffect(() => {
    if (props.stage === 1) {
      progress.value = withTiming(10, { duration: 500 });
      stageTwoColor.value = withTiming(0, { duration: 500 });
    } else if (props.stage === 2) {
      progress.value = withTiming(50, { duration: 500 });
      stageTwoColor.value = withTiming(100, { duration: 500 });
      stageThreeColor.value = withTiming(0, { duration: 500 });
    } else if (props.stage === 3) {
      progress.value = withTiming(100, { duration: 500 });
      stageThreeColor.value = withTiming(100, { duration: 500 });
    }
  }, [props.stage]);

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value}%`,
    };
  });

  const stageTwoStyle = useAnimatedStyle(() => {
    return {
      backgroundColor:
        stageTwoColor.value === 100 ? tertiaryThree : secondaryOne,
    };
  });
  const stageThreeStyle = useAnimatedStyle(() => {
    return {
      backgroundColor:
        stageThreeColor.value === 100 ? tertiaryThree : secondaryOne,
    };
  });

  return (
    <View
      id="stage"
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        position: "relative",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={[
            styles.separator,
            {
              zIndex: 3,
              backgroundColor: tertiaryThree,
            },
          ]}
        >
          <Text
            style={{
              color: tertiaryOne,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {1}
          </Text>
        </View>
        <Animated.View
          style={[
            styles.separator,
            {
              zIndex: 3,
              backgroundColor: secondaryOne,
            },
            stageTwoStyle,
          ]}
        >
          <Text
            style={{
              color: tertiaryOne,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {2}
          </Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.separator,
            {
              zIndex: 3,
            },
            stageThreeStyle,
          ]}
        >
          <Text
            style={{
              color: tertiaryOne,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {3}
          </Text>
        </Animated.View>
      </View>
      <View
        style={{
          height: 6,
          backgroundColor: "#D9D9D9",
          position: "absolute",
          width: `100%`,
          zIndex: 1,
        }}
      >
        <Animated.View
          style={[
            {
              height: "100%",
              backgroundColor: tertiaryThree,
              zIndex: 2,
            },
            progressStyle,
          ]}
        />
      </View>
    </View>
  );
};

export default BasketProgress;

const styles = StyleSheet.create({
  separator: {
    height: 32,
    width: 32,
    borderRadius: 100,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
