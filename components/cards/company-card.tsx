import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import ThemedText from "../shared/themed-text/themed-text";
import {
  primaryOne,
  primaryFour,
  secondaryOne,
  natural20,
  productCardBackground,
} from "@/constants/colors";
import Mulish from "@/constants/font";
import CardIcons from "../shared/icons/card.icons";
import Icons from "../shared/icons/icons";
import { ICompany } from "@/types/api.types";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

const getWidth = () => Dimensions.get("window").width * 0.9;
const getHeight = () => 125;

const CompanyCard = ({ data }: { data: ICompany }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(
          `modals/company-modal?companyId=${data.id}&companyDistance=${data.distance}`
        );
      }}
    >
      <View style={[styles.card, { width: getWidth(), height: getHeight() }]}>
        <View style={styles.cardContent}>
          <ImageBackground
            source={{ uri: data.imageUrl }}
            resizeMode="cover"
            style={styles.imageBackground}
          >
            <View style={styles.imageOverlay} />
          </ImageBackground>
          <View style={styles.infoContainer}>
            <ThemedText style={styles.companyName}>{data.name}</ThemedText>
            <RatingDisplay rating={data.starRating} />
            <LocationDisplay distance={"null"} />
            {/* <View>
              {data.foodCategories.slice(0, 3).map((category, index) => (
                <ThemedText key={index} style={styles.category}>
                  {category}
                </ThemedText>
              ))}
            </View> */}
          </View>
        </View>
        <PriceDisplay minPrice={"null"} />
        <FavoriteIcon isFavorite={null} />
      </View>
    </TouchableOpacity>
  );
};

const RatingDisplay = ({ rating }) => (
  <View style={styles.ratingContainer}>
    <CardIcons.StarIcon width={12} height={12} style={{ color: primaryOne }} />
    <ThemedText style={styles.ratingText}>{rating}</ThemedText>
  </View>
);

const LocationDisplay = ({ distance }) => (
  <View style={styles.locationContainer}>
    <Icons.LocationOn width={12} height={12} color={primaryOne} />
    <ThemedText style={styles.locationText}>{distance} km</ThemedText>
  </View>
);

const PriceDisplay = ({ minPrice }) => (
  <View style={styles.priceContainer}>
    <ThemedText style={styles.minText}>min.</ThemedText>
    <ThemedText style={styles.priceText}>{minPrice}.00 TL</ThemedText>
  </View>
);

const FavoriteIcon = ({ isFavorite }) =>
  isFavorite ? (
    <CardIcons.FavoriteDown
      width={25}
      height={25}
      style={styles.favoriteIcon}
    />
  ) : (
    <CardIcons.FavoriteUp width={25} height={25} style={styles.favoriteIcon} />
  );

export default CompanyCard;

const styles = StyleSheet.create({
  card: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 12,
    backgroundColor: "white",
    elevation: 2,
  },
  cardContent: {
    width: "100%",
    height: "100%",
    paddingVertical: 5,
    paddingHorizontal: 6,
    flexDirection: "row",
  },
  imageBackground: {
    width: 115,
    height: 115,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 8,
    justifyContent: "flex-start",
  },
  companyName: {
    fontSize: 16,
    fontFamily: Mulish.Bold,
    color: primaryOne,
    textDecorationLine: "underline",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  ratingText: {
    fontSize: 12,
    fontFamily: Mulish.Bold,
    color: primaryOne,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  locationText: {
    fontSize: 12,
    fontFamily: Mulish.Bold,
    color: primaryOne,
  },
  category: {
    fontSize: 12,
    fontFamily: Mulish.Regular,
    color: primaryOne,
    textDecorationStyle: "dotted",
  },
  priceContainer: {
    position: "absolute",
    bottom: 0,
    right: 4,
    flexDirection: "row",
    gap: 2,
    alignItems: "flex-end",
  },
  minText: {
    fontSize: 12,
    fontFamily: Mulish.Regular,
    color: natural20,
    paddingBottom: 2,
  },
  priceText: {
    fontSize: 18,
    fontFamily: Mulish.Bold,
    color: primaryOne,
  },
  favoriteIcon: {
    position: "absolute",
    top: 6,
    right: 8,
    color: primaryFour,
    zIndex: 2,
  },
});
