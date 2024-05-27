import { View, Text } from "react-native";
import React from "react";
import SplashBg from "../../assets/images/splashbg.svg";
import Logo from "../../assets/images/YerizLogo.svg";

type Props = {};

const Splash = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SplashBg />
      </View>
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo />
      </View>
    </View>
  );
};

export default Splash;
