import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Path, Polygon, Svg } from "react-native-svg";

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

export const ApproveIcon = (props: any) => {
  return (
    <Svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
      enableBackground="0 0 48 48"
      xmlSpace="preserve"
    >
      <Polygon
        fill="#42A5F5"
        points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 
	39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 
	3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884 "
      />
      <Polygon
        fill="#FFFFFF"
        points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926 "
      />
    </Svg>
  );
};
