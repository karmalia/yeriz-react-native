import { StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import { useGetAboutOrderById } from "@/api/queries/help/get-about-order-byid";
import { useLocalSearchParams } from "expo-router";
import ThemedText from "@/components/shared/themed-text/themed-text";
import Mulish from "@/constants/font";
import AnimatedSpinner from "@/components/shared/spinner/spinner";
import {
  buttonShadow,
  natural10,
  natural20,
  primaryOne,
} from "@/constants/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const AnswerPage = () => {
  const params = useLocalSearchParams<{ answerId: string }>();
  const { data, isLoading, isError } = useGetAboutOrderById(params.answerId);
  console.log("data", data);

  if (isError || !data) {
    return (
      <ThemedText
        style={{
          color: "red",
          fontFamily: Mulish.Black,
        }}
      >
        Beklenmiyen bir hata oluştu. (AnswerPage)
      </ThemedText>
    );
  }

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatedSpinner color="primaryOne" variant="primary" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        gap: 20,
        backgroundColor: "white",
      }}
    >
      <View style={styles.box}>
        <ThemedText
          style={{
            color: "black",
            fontFamily: Mulish.Bold,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          {data.question}
        </ThemedText>
        <ThemedText
          style={{
            color: natural20,
            fontFamily: Mulish.Regular,
          }}
        >
          {data.answer}
        </ThemedText>
      </View>
      {data.link && (
        <TouchableOpacity
          style={{
            backgroundColor: primaryOne,

            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 8,
            minHeight: 50,
            justifyContent: "center",
            ...buttonShadow,
          }}
          onPress={() => console.log("data.link.link")}
        >
          <ThemedText
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: Mulish.Bold,
              fontSize: 16,
            }}
          >
            {data.link.text}
          </ThemedText>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AnswerPage;

const styles = StyleSheet.create({
  box: {
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 20,
    elevation: 2,
    backgroundColor: "white",
    borderRadius: 12,
  },
});
