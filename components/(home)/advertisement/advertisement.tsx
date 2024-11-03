import AdvertisementLogo from "@/components/shared/icons/advertisement-logo";
import {
  primaryFive,
  primaryFour,
  primaryOne,
  primaryThree,
  primaryTwo,
} from "@/constants/colors";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Dimensions, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import HTMLView from "react-native-htmlview";
import { set } from "zod";
import AdProgress from "./ad-progress";
const data = [...new Array(6).keys()];

const AdvertisementData = [
  {
    title:
      "<h1><b>BizYeriz, </b> İsrafı Değere Dönüştüren Mobil Uygulama!</h1>",
    description:
      "<p>BizYeriz, yiyecek paylaşımını kolaylaştırarak israfı azaltıyor ve çevre dostu bir dayanışma platformu olarak toplumu bir araya getiriyor.</p>",
    Logo: AdvertisementLogo.BizYerizLogo,
  },
  {
    title: "<h1><b>Çevresel Fayda</b></h1>",
    description:
      "<p>Gıda atıkları, sera gazı emisyonlarının %10'undan sorumludur. BizYeriz ile buna bir son verebilirsin!</p>",
    Logo: AdvertisementLogo.PlantLogo,
  },
  {
    title: "<h1><b>Ekonomik Fayda</b></h1>",
    description:
      "<p>Gıda israfı her yıl 1.2 trilyon dolara mal oluyor. BizYeriz ile buna bir son verebilirsin!</p>",
    Logo: AdvertisementLogo.SavingLogo,
  },
  {
    title: "<h1><b>Sosyal Fayda</b></h1>",
    description:
      "<p>Yılda 2,5 milyar ton gıda israf olurken, her gün 828 milyon insan aç kalıyor. BizYeriz ile buna bir son verebilirsin!</p>",
    Logo: AdvertisementLogo.SocialLogo,
  },
];

const width = Dimensions.get("window").width;

type Props = {};

const Advertisement = (props: Props) => {
  const ref = React.useRef<ICarouselInstance>(null);
  const [activeAd, setActiveAd] = React.useState<number>(0);

  return (
    <View
      style={{
        height: width / 2,
      }}
    >
      <Carousel
        ref={ref}
        width={width}
        height={width / 2}
        data={AdvertisementData}
        onScrollEnd={(index) => {
          setActiveAd(index);
        }}
        autoPlay={true}
        autoPlayInterval={5000}
        renderItem={(data) => {
          const { title, description, Logo } = data.item;
          return (
            <View
              style={{
                width: width - 40,
                height: width / 2,
                marginHorizontal: "auto",
                justifyContent: "center",
                gap: 8,
                alignItems: "center",
                backgroundColor: "#B4DBD480",
                borderRadius: 20,
              }}
            >
              <Logo width={45} height={45} />
              <HTMLView stylesheet={styles} value={title} />
              <HTMLView stylesheet={styles} value={description} />
            </View>
          );
        }}
      />
      <AdProgress length={AdvertisementData.length} progress={activeAd} />
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 18,
    textAlign: "center",
    color: primaryOne,
    maxHeight: 50,
    width: Dimensions.get("window").width / 1.2,
  },
  p: {
    fontSize: 14,
    textAlign: "center",
    color: primaryOne,
    marginBottom: 24,
    paddingHorizontal: 12,
  },
});

export default Advertisement;
