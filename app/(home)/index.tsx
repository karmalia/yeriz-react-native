import * as React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { ScrollView, View } from "react-native";
import { Link } from "expo-router";
import Poppins from "@/constants/font";
import ThemedText from "@/components/shared/themed-text/themed-text";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import Icons from "@/components/shared/icons/icons";
import { natural10, natural30 } from "@/constants/colors";
import CardIcons from "@/components/shared/icons/card.icons";

const dummyData = [
  {
    title: "Loccake Cafe",
    image: "../../assets/images/card/cake.png",
    favorite: true,
    originalPrice: 150,
    newPrice: 50,
  },
  {
    title: "Loccake Cafe",
    image: "../../assets/images/card/cake.png",
    favorite: false,
    originalPrice: 150,
    newPrice: 50,
  },
  {
    title: "Loccake Cafe",
    image: "../../assets/images/card/cake.png",
    favorite: true,
    originalPrice: 150,
    newPrice: 50,
  },
  {
    title: "Loccake Cafe",
    image: "../../assets/images/card/cake.png",
    favorite: false,
    originalPrice: 150,
    newPrice: 50,
  },
];

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.listWrapper}>
        <View style={styles.titleWrapper}>
          <ThemedText style={styles.title}>Popüler Ürünler</ThemedText>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 20,
              gap: 3,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: Poppins.Regular,
                color: natural30,
              }}
            >
              Tümünü göster
            </Text>

            <Icons.ChevronDown
              width={16}
              height={16}
              style={{
                color: natural30,
              }}
            />
          </View>
        </View>
        <ScrollView
          horizontal
          style={styles.cardList}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            styles.cardList,
            {
              display: "flex",
              flexDirection: "row",
              gap: 16,
              paddingVertical: 10,
              height: 250,
            },
          ]}
        >
          {dummyData.map((item, index) => (
            <View style={styles.card} key={index}>
              <View style={styles.cardContent}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 18,
                      lineHeight: 24,
                      fontWeight: "semibold",
                      textDecorationLine: "underline",
                    },
                  ]}
                >
                  {item.title}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: 12,
                      },
                    ]}
                  >
                    Bugün al
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: 12,
                      },
                    ]}
                  >
                    18:00-19:00
                  </Text>
                </View>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 12,
                      fontWeight: "600",
                    },
                  ]}
                >
                  Medovik Dilim Pasta
                </Text>
              </View>

              <View
                style={{
                  borderColor: "white",
                  width: "100%",
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  zIndex: 1,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    height: 50,
                    paddingHorizontal: 20,
                    borderTopRightRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: natural30,
                      textDecorationLine: "line-through",
                      fontFamily: Poppins.MediumItalic,
                      textAlignVertical: "bottom",
                      lineHeight: 20,
                    }}
                  >
                    {item.originalPrice}₺
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: natural10,
                      fontFamily: Poppins.Medium,
                      lineHeight: 20,
                    }}
                  >
                    {item.newPrice}₺
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 20,
                    alignItems: "center",
                    backgroundColor: "white",
                    height: 50,
                    borderTopLeftRadius: 20,
                  }}
                >
                  <CardIcons.PlusIcon
                    style={{
                      color: natural10,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                  backgroundColor: "rgba(0,0,0,0.5)",
                  borderRadius: 20,
                  overflow: "hidden",
                }}
              />
              {item.favorite ? (
                <CardIcons.FavoriteUp style={styles.badge} />
              ) : (
                <CardIcons.FavoriteDown style={styles.badge} />
              )}
              <Image
                //Require is not required when using local files
                source={require("../../assets/images/card/cake.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: -1,
                }}
                placeholder={{ blurhash }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  listWrapper: {
    gap: 12,
    height: Dimensions.get("window").height * 0.5,

    maxHeight: 200,
  },
  cardList: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },

  badge: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
    color: natural10,
  },
  card: {
    width: 235,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    position: "relative",
    overflow: "hidden",

    // shadow
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardContent: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    display: "flex",
    flexDirection: "column",

    padding: 10,
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontFamily: Poppins.Regular,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
