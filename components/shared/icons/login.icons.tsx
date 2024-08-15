import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const BizYerizPng = (props: any) => {
  return (
    <Image source={require("@/assets/images/biz-yeriz-png.png")} {...props} />
  );
};

export const GoogleTurkishSignIn = (props: any) => {
  return (
    <TouchableOpacity {...props}>
      <Image
        source={require("@/assets/images/login/google-tr.png")}
        style={{ width: "100%", height: "100%" }}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );
};

export const FacebookTurkishSignIn = (props: any) => {
  return (
    <TouchableOpacity {...props}>
      <Image
        source={require("@/assets/images/login/facebook-tr.png")}
        style={{ width: "100%", height: "100%" }}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );
};

export const AppleTurkishSignIn = (props: any) => {
  return (
    <Image source={require("@/assets/images/login/apple-tr.png")} {...props} />
  );
};
