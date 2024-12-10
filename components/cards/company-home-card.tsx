import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import ThemedText from "../shared/themed-text/themed-text";
import {
  primaryOne,
  primaryThree,
  secondary,
  secondaryOne,
  tertiaryThree,
} from "@/constants/colors";
import Mulish from "@/constants/font";
import CardIcons from "../shared/icons/card.icons";
import Icons from "../shared/icons/icons";
import { TCompanyCard } from "./card.types";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

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
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(
          `modals/company-modal?companyId=${data.id}&companyDistance=${data.distance}`
        );
      }}
    >
      <ImageBackground
        source={{ uri: data.imageUrl }}
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
          <ThemedText style={styles.companyName}>{data.name}</ThemedText>
          <ThemedText>{data.companyTypeName}</ThemedText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 2,
            }}
          >
            <Icons.LocationOn
              style={{ color: secondaryOne, opacity: 0.9 }}
              width={14}
              height={14}
            />
            <ThemedText style={styles.distance}>
              {(data.distance / 1000).toFixed(1)}km
            </ThemedText>
          </View>
        </View>

        <View style={styles.ratingContainer}>
          <CardIcons.StarIcon width={14} height={14} style={styles.iconStar} />
          <Text style={styles.ratingNumber}>{data.starRating}</Text>
        </View>

        <View style={styles.overlay} />
        {data.isActive ? (
          <View style={styles.badgeIcon}>
            <CardIcons.FavoriteUp style={{ color: "red", opacity: 0.9 }} />
          </View>
        ) : (
          <View style={styles.badgeIcon}>
            <CardIcons.FavoriteDown style={{ color: "gray", opacity: 0.9 }} />
          </View>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CompanyHomeCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
    flexDirection: "row",
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
    gap: 2,
  },
  companyName: {
    fontSize: 18,
    fontFamily: Mulish.SemiBold,
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
    textAlign: "left",
    letterSpacing: 2,
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
    color: tertiaryThree,
    paddingTop: 8,
    paddingRight: 8,
  },
});
