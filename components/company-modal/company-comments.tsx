import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  activeStar,
  natural20,
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
import { useGetCompanyComments } from "@/api/queries/companies/get-company-comments";
import { FlatList } from "react-native-gesture-handler";

type Props = {
  companyId: string;
  starRating: number;
};

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

function Header({ starRating }: { starRating: number }) {
  return (
    <>
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
            {starRating || 0} / 5.0
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
    </>
  );
}

const CompanyComments = ({ companyId, starRating }: Props) => {
  const { data, isLoading, isError } = useGetCompanyComments(companyId);

  return (
    <View style={styles.container}>
      {data && (
        <FlatList
          data={data}
          ListHeaderComponent={() => <Header starRating={starRating} />}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={{
            paddingHorizontal: 20,
            gap: 10,
          }}
          renderItem={({ item }) => {
            return (
              <Comment
                starRating={item.starRating}
                comment={item.comment}
                createdAt={item.createdAt}
              />
            );
          }}
        />
      )}
    </View>
  );
};

const Comment = (comment: {
  starRating: number;
  comment: string;
  createdAt: string;
}) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        elevation: 2,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",

          marginBottom: 4,
        }}
      >
        <Icons.UserIconCircle
          width={34}
          height={34}
          style={{
            color: primaryOne,
            marginRight: 2,
          }}
        />
        {Array.from({ length: 5 }).map((_, i) => (
          <Icons.GoldStar
            width={24}
            height={24}
            style={{
              color: i + 1 <= comment.starRating ? activeStar : passiveStar,
            }}
          />
        ))}
      </View>
      <ThemedText
        style={{
          color: natural20,
          fontSize: 14,
          fontFamily: Mulish.Regular,
          textAlign: "left",
        }}
      >
        {comment.comment}
      </ThemedText>
    </View>
  );
};

export default CompanyComments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "center",
  },
});
