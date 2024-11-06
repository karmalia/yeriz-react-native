import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import ThemedText from "../shared/themed-text/themed-text";
import Icons from "../shared/icons/icons";
import { natural20, primaryOne } from "@/constants/colors";
import ThemedCheckbox from "../shared/themed-checkbox/themed-checkbox";
import { TouchableOpacity } from "react-native-gesture-handler";
import Mulish from "@/constants/font";

type Props = {
  isOpen: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
};

const ActionFilter = ({ isOpen, setClose }: Props) => {
  const sharedTranslateY = useSharedValue(0);

  useEffect(() => {
    if (!isOpen) {
      sharedTranslateY.value = withTiming(0, { duration: 500 });
    } else {
      sharedTranslateY.value = withTiming(-Dimensions.get("window").height, {
        duration: 500,
      });
    }
  }, [isOpen]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: sharedTranslateY.value }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          backgroundColor: "white",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          position: "absolute",
          bottom: -Dimensions.get("window").height,
          left: 0,
          width: Dimensions.get("window").width,
          height: "100%",
          zIndex: 2,
          padding: 20,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        animatedStyle,
      ]}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            borderBottomColor: primaryOne,
            borderBottomWidth: 2,
            paddingBottom: 10,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <ThemedText
            style={{
              fontSize: 22,
              textAlign: "left",
              color: primaryOne,
              fontFamily: "Mulish-SemiBold",
            }}
          >
            Filter
          </ThemedText>
          <TouchableOpacity onPress={setClose}>
            <Icons.CloseIcon
              width={24}
              height={24}
              style={{
                color: primaryOne,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            paddingTop: 12,
            gap: 12,
          }}
        >
          <ThemedText
            style={{
              fontSize: 18,
              color: natural20,
              fontFamily: Mulish.SemiBold,
              marginLeft: 8,
            }}
          >
            Kategoriler
          </ThemedText>
          <ThemedCheckbox
            label="Pastane - Fırın"
            value={"categoriePastane"}
            fontSize={16}
            height={18}
          />
          <ThemedCheckbox
            label="Aparatifler"
            value={"categorieAparatifler"}
            fontSize={16}
            height={18}
          />
          <ThemedCheckbox
            label="Ana Yemekler"
            value={"categorieAnaYemekler"}
            fontSize={16}
            height={18}
          />
          <ThemedCheckbox
            label="Salatalar - Mezeler"
            value={"categorieSalats"}
            fontSize={16}
            height={18}
          />
        </View>
        <View
          style={{
            display: "flex",
            paddingVertical: 12,
            gap: 12,
          }}
        >
          <ThemedText
            style={{
              fontSize: 18,
              color: natural20,
              fontFamily: Mulish.SemiBold,
              marginLeft: 8,
            }}
          >
            Puan
          </ThemedText>
          <ThemedCheckbox
            label="Pastane - Fırın"
            value={"categoriePastane"}
            fontSize={16}
            height={18}
          />
          <ThemedCheckbox
            label="Aparatifler"
            value={"categorieAparatifler"}
            fontSize={16}
            height={18}
          />
          <ThemedCheckbox
            label="Ana Yemekler"
            value={"categorieAnaYemekler"}
            fontSize={16}
            height={18}
          />
          <ThemedCheckbox
            label="Salatalar - Mezeler"
            value={"categorieSalats"}
            fontSize={16}
            height={18}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: primaryOne,
          padding: 12,
          borderRadius: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setClose(false)}
      >
        <ThemedText
          style={{
            fontSize: 18,
            color: "white",
            fontFamily: Mulish.SemiBold,
          }}
        >
          Uygula
        </ThemedText>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ActionFilter;

const styles = StyleSheet.create({});
