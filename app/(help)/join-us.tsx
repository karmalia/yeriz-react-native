import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedText from "@/components/shared/themed-text/themed-text";
import Mulish from "@/constants/font";
import {
  buttonShadow,
  natural20,
  natural30,
  natural40,
  primaryOne,
  primaryTwo,
  white,
} from "@/constants/colors";
import Icons from "@/components/shared/icons/icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";

type Props = {};

const JoinUs = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ThemedText
          style={{
            color: "black",
            fontFamily: Mulish.Bold,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Bir restoran sahibiyim ve iş birliği yapmak istiyorum. Başvuru süreci
          nasıl işliyor?
        </ThemedText>
        <ThemedText
          style={{
            color: natural20,
            fontFamily: Mulish.Regular,
          }}
        >
          Bizimle çalışmak istemeniz bizi çok mutlu etti! Restoranınızı tanıtmak
          ve iş birliği sürecimizi başlatmak için aşağıdaki bağlantıdan
          formumuzu doldurabilir ya da WhatsApp üzerinden bizimle kolayca
          iletişime geçebilirsiniz.
        </ThemedText>
      </View>
      <TouchableOpacity style={styles.button}>
        <Icons.WhatsApp
          style={{
            color: primaryTwo,
          }}
          width={20}
          height={20}
        />
        <Link href="https://wa.me/905375529342">
          <ThemedText
            style={{
              color: "#67C15E",
              fontFamily: Mulish.Bold,

              fontSize: 16,
            }}
          >
            {"WhatsApp'tan İletişime Geçin"}
          </ThemedText>
        </Link>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          height: 30,
          marginTop: 10,
        }}
      >
        <View style={{ height: 1, backgroundColor: natural30, flex: 1 }} />
        <Text
          style={{
            textAlign: "center",
            fontFamily: Mulish.Bold,
            color: natural30,
          }}
        >
          veya
        </Text>
        <View style={{ height: 1, backgroundColor: natural30, flex: 1 }} />
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: primaryOne }]}
      >
        <ThemedText
          style={{
            color: "white",
            fontFamily: Mulish.Bold,

            fontSize: 16,
          }}
        >
          {"Başvuru Formunu Doldurun"}
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default JoinUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "white",
  },
  box: {
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 20,

    backgroundColor: "white",
    borderRadius: 12,
    ...buttonShadow,
  },
  button: {
    gap: 10,
    marginTop: 10,
    backgroundColor: "white",
    flexDirection: "row",

    paddingVertical: 20,
    paddingHorizontal: 10,
    alignContent: "center",
    borderRadius: 8,
    justifyContent: "center",
    ...buttonShadow,
  },
});
