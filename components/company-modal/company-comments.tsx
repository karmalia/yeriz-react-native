import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  activeStar,
  natural30,
  passiveStar,
  primaryFive,
  primaryFour,
  primaryOne,
  primaryThree,
  primaryTwo,
} from "@/constants/colors";
import CardIcons from "../shared/icons/card.icons";
import Icons from "../shared/icons/icons";
import ThemedText from "../shared/themed-text/themed-text";
import Mulish from "@/constants/font";

type Props = {};

function createStarComponent(stars: number, percentage: number) {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 0,
          paddingTop: 2,
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Icons.GoldStar
            width={24}
            height={24}
            style={{
              color: i + 1 <= stars ? activeStar : passiveStar,
            }}
          />
        ))}
      </View>
      <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          paddingTop: 2,
        }}
      >
        <ThemedText
          style={{
            color: passiveStar,
            fontSize: 14,
            fontFamily: Mulish.Black,
            flex: 1,
            textAlign: "left",
          }}
        >
          {percentage}%
        </ThemedText>
      </View>
    </View>
  );
}

const dummyComments = [
  {
    id: 1,
  },
];

const CompanyComments = (props: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 24,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: primaryOne,
            paddingHorizontal: 20,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icons.CommentStart
            width={50}
            height={50}
            style={{
              color: primaryOne,
            }}
          />
          <ThemedText
            style={{
              color: primaryOne,
              fontSize: 22,
              fontFamily: Mulish.Black,
            }}
          >
            null / 5.0
          </ThemedText>
        </View>
        <View
          style={{
            alignContent: "center",
            // paddingVertical: 15,
          }}
        >
          {createStarComponent(5, 40)}
          {createStarComponent(4, 27)}
          {createStarComponent(3, 14)}
          {createStarComponent(2, 12)}
          {createStarComponent(1, 7)}
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <ThemedText
          style={{
            color: "black",
            fontSize: 18,
            fontFamily: Mulish.Bold,
            textAlign: "left",
          }}
        >
          Yorumlar
        </ThemedText>
        <View></View>
      </View>
    </View>
  );
};

export default CompanyComments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    alignContent: "center",
  },
});
