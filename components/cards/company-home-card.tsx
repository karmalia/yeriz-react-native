import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import ThemedText from "../shared/themed-text/themed-text";
import { primaryOne, primaryThree, tertiaryThree } from "@/constants/colors";
import Mulish from "@/constants/font";
import CardIcons from "../shared/icons/card.icons";
import Icons from "../shared/icons/icons";
import { TCompanyCard } from "./card.types";

const getWidthAndHeightCompanyCard = () => {
  const screenWidth = Dimensions.get("window").width;
  const isLandscape = screenWidth > Dimensions.get("window").height;

  const width = screenWidth * 0.6;
  const cardWidth = isLandscape ? Math.min(width, 400) : width;
  const cardHeight = cardWidth / 1.75; // Set height based on 1.75:1 aspect ratio

  return { cardWidth, cardHeight };
};

const CompanyHomeCard = ({ data }: { data: TCompanyCard }) => {
  const { cardWidth, cardHeight } = getWidthAndHeightCompanyCard();

  return (
    <ImageBackground
      source={{ uri: data.companyImage }}
      resizeMode="cover"
      style={[
        styles.card,
        {
          width: cardWidth,
          height: cardHeight,
        },
      ]}
    >
      <View style={styles.cardContent}>
        <ThemedText style={styles.companyName}>{data.companyName}</ThemedText>
        {data.foodCategories.map((category, index) => (
          <ThemedText key={index} style={styles.category}>
            - {category}
          </ThemedText>
        ))}
        <ThemedText style={styles.distance}>
          <Icons.LocationOn style={styles.iconLocation} />
          {data.distance}km
        </ThemedText>
      </View>

      <View style={styles.ratingContainer}>
        <CardIcons.StarIcon width={14} height={14} style={styles.iconStar} />
        <Text style={styles.ratingNumber}>{data.companyRating}</Text>
      </View>

      <View style={styles.overlay} />
      {data.isActive ? (
        <CardIcons.FavoriteUp style={styles.badgeIcon} />
      ) : (
        <CardIcons.FavoriteDown style={styles.badgeIcon} />
      )}
    </ImageBackground>
  );
};

export default CompanyHomeCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cardContent: {
    width: "100%",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  companyName: {
    fontSize: 20,
    fontFamily: Mulish.SemiBold,
    textDecorationLine: "underline",
    textAlign: "left",
  },
  category: {
    fontSize: 12,
    fontFamily: Mulish.SemiBold,
    textAlign: "left",
  },
  distance: {
    fontSize: 12,
    fontFamily: Mulish.SemiBold,
    textDecorationLine: "underline",
    textAlign: "left",
    letterSpacing: 2,
  },
  iconLocation: {
    color: primaryOne,
    height: 10,
    width: 10,
  },
  ratingContainer: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 40,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 1,
    borderColor: primaryThree,
    borderWidth: 2,
    gap: 4,
    width: "25%",
  },
  ratingNumber: {
    fontSize: 14,
    fontFamily: Mulish.SemiBold,
  },
  iconStar: {
    color: primaryThree,
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    backgroundColor: "rgba(0,0,0,.5)",
    borderRadius: 20,
  },
  badgeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
    color: tertiaryThree,
  },
});
