import { StyleSheet, View, Switch } from "react-native";
import React from "react";
import { primaryOne, primaryTwo, tertiaryThree } from "@/constants/colors";

type Props = {
  isEnabled: boolean;
  onSwitch: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemedSwitch = (props: Props) => {
  const toggleSwitch = () => props.onSwitch((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: tertiaryThree, true: primaryTwo }}
        thumbColor={props.isEnabled ? primaryOne : primaryOne}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={props.isEnabled}
      />
    </View>
  );
};

export default ThemedSwitch;

const styles = StyleSheet.create({
  container: {},
});
