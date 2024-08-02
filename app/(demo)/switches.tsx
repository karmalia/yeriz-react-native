import { View, Text } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/shared/demo-wrap";
import ThemedSwitch from "@/components/shared/themed-switch/themed-switch";
import { primaryOne, secondaryOne, tertiaryOne } from "@/constants/colors";

type Props = {};

const Switches = (props: Props) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  return (
    <ScreenWrapper>
      <Text
        style={{
          color: "black",
          fontSize: 20,
          textAlign: "center",

          paddingVertical: 20,
        }}
      >
        Switches
      </Text>
      <View>
        <ThemedSwitch isEnabled={isEnabled} onSwitch={setIsEnabled} />
      </View>
      <Text
        style={{
          color: isEnabled ? primaryOne : tertiaryOne,
          fontSize: 20,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        {isEnabled ? "Enabled" : "Disabled"}
      </Text>
    </ScreenWrapper>
  );
};

export default Switches;
