import React from "react";

import {
  primaryOne,
  primaryThree,
  primaryTwo,
  secondaryFour,
  secondaryOne,
  secondaryThree,
  secondaryTwo,
  tertiaryOne,
  tertiaryThree,
  tertiaryTwo,
  white,
} from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, SafeAreaView } from "react-native";
import Icons from "../shared/icons/icons";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={[white, secondaryFour, secondaryThree]}
        style={styles.wrapper}
      >
        <Icons.YerizLogo width={158} height={193} />
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LoginLayout;
const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  buttons: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 20,
    paddingHorizontal: 20,
  },
  btn: {
    flex: 1,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  btntext: {
    fontSize: 16,
    fontWeight: "400",
  },
});
