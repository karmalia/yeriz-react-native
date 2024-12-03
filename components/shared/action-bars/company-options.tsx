import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import Constants from "expo-constants";
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from "react-native-gesture-handler";
import { natural30, natural40, primaryOne } from "@/constants/colors";

import Mulish from "@/constants/font";

import Icons from "../icons/icons";
import ThemedText from "../themed-text/themed-text";
import { useRouter } from "expo-router";
type TCompanyContentTabs = "meals" | "about" | "complain";
const CompanyModalOptions = ({
  setModal,
  modal,
}: {
  modal: {
    status: boolean;
    activeTab: TCompanyContentTabs;
  };
  setModal: React.Dispatch<
    React.SetStateAction<{
      status: boolean;
      activeTab: TCompanyContentTabs;
    }>
  >;
}) => {
  const router = useRouter();
  const [contentHeight, setContentHeight] = useState(0);
  const [actionBarHeight, setActionBarHeight] = useState(0);
  const maxActionBarHeight = Dimensions.get("window").height * 0.9;

  const translateY = useSharedValue(0);

  const headerHeight = Dimensions.get("window").height * 0.075;

  const threshold = actionBarHeight * 0.25;

  useEffect(() => {
    const totalHeight = headerHeight + contentHeight;

    if (totalHeight > maxActionBarHeight) {
      setActionBarHeight(maxActionBarHeight);
    } else {
      setActionBarHeight(totalHeight);
    }
  }, [contentHeight]);

  const pan = Gesture.Pan()
    .onStart((event) => {
      translateY.value = event.translationY;
    })
    .onUpdate((event) => {
      translateY.value = -actionBarHeight + event.translationY;
    })
    .onEnd((event) => {
      if (event.translationY > threshold) {
        runOnJS(setModal)({ ...modal, status: false });
      } else {
        translateY.value = withTiming(-actionBarHeight, {
          duration: 300,
          easing: Easing.out(Easing.ease),
        });
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    if (modal.status && actionBarHeight > 0) {
      translateY.value = withTiming(-actionBarHeight, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      translateY.value = withTiming(0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [modal.status, actionBarHeight]);

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: modal.status ? "flex" : "none",
      }}
    >
      {actionBarHeight > 0 && (
        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: -actionBarHeight + Constants.statusBarHeight,
              left: 0,
              height: actionBarHeight,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              backgroundColor: "white",
              justifyContent: "space-between",
              right: 0,
              overflow: "hidden",
            },
            animatedStyle,
          ]}
        >
          <GestureDetector gesture={pan}>
            <View
              style={{
                height: headerHeight,
                backgroundColor: "white",
                elevation: 4,
                width: "100%",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: -5,
                  left: 0,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icons.ActionBarHandler
                  color={natural30}
                  width={Dimensions.get("window").width * 0.8}
                  height={20}
                />
              </View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 12,
                  top: 0,
                  transform: [
                    { translateY: Dimensions.get("window").height * 0.04 - 8 },
                  ],
                }}
                onPress={() => {
                  setModal({
                    ...modal,
                    status: false,
                  });
                }}
              >
                <Icons.CloseIcon color={primaryOne} width={16} height={16} />
              </TouchableOpacity>

              <Text
                style={{
                  color: primaryOne,
                  textAlign: "center",
                  fontSize: 22,
                  fontFamily: Mulish.SemiBold,
                  letterSpacing: 1,
                }}
              >
                {"Seçenekler"}
              </Text>
            </View>
          </GestureDetector>

          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 12,
              paddingTop: 6,
              flexDirection: "row",
              justifyContent: "center",
            }}
            style={{
              maxHeight: actionBarHeight - headerHeight,
            }}
          >
            <View
              onLayout={(event) => {
                const { height } = event.nativeEvent.layout;
                setContentHeight(height);
              }}
              style={{
                width: "100%",
              }}
            >
              {modal.activeTab !== "meals" && (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                    borderBottomWidth: 1,
                    borderColor: natural40,
                    padding: 12,
                  }}
                  onPress={() => {
                    setModal({
                      status: false,
                      activeTab: "meals",
                    });
                  }}
                >
                  <ThemedText
                    style={{
                      color: "black",
                      fontFamily: Mulish.SemiBold,
                    }}
                  >
                    Yemekler
                  </ThemedText>
                </TouchableOpacity>
              )}

              {modal.activeTab !== "about" && (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                    borderBottomWidth: 1,
                    borderColor: natural40,
                    padding: 12,
                  }}
                  onPress={() => {
                    setModal({
                      status: false,
                      activeTab: "about",
                    });
                  }}
                >
                  <ThemedText
                    style={{
                      color: "black",
                      fontFamily: Mulish.SemiBold,
                    }}
                  >
                    İşletme Hakkında
                  </ThemedText>
                </TouchableOpacity>
              )}

              {modal.activeTab !== "complain" && (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                    borderBottomWidth: 1,
                    borderColor: natural40,
                    padding: 12,
                  }}
                  onPress={() => {
                    setModal({
                      status: false,
                      activeTab: "complain",
                    });
                  }}
                >
                  <ThemedText
                    style={{
                      color: "black",
                      fontFamily: Mulish.SemiBold,
                    }}
                  >
                    Şikayet Bildir
                  </ThemedText>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
};

export default CompanyModalOptions;
