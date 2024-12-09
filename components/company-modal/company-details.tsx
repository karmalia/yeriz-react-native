import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedText from "../shared/themed-text/themed-text";
import Mulish from "@/constants/font";
import {
  contentWhite,
  natural10,
  natural30,
  natural40,
  primaryOne,
} from "@/constants/colors";
import Icons from "../shared/icons/icons";
import CardIcons from "../shared/icons/card.icons";

type CompanyDetailsProps = {
  mobilePhone: string | null;
  companyPhone: string | null;
  address: string | null;
  workHours:
    | {
        day: string;
        open: string;
        close: string;
      }[]
    | null;
};

const CompanyDetails = ({
  mobilePhone,
  companyPhone,
  address,
  workHours,
}: CompanyDetailsProps) => {
  return (
    <View style={styles.container}>
      <ThemedText
        style={{
          fontSize: 16,
          fontFamily: Mulish.Medium,
          color: natural10,
          borderTopColor: natural40,
          borderTopWidth: 1,
          paddingTop: 10,
        }}
      >
        İletişim Bilgileri
      </ThemedText>
      <View
        style={{
          marginVertical: 10,
          gap: 10,
          borderBottomColor: natural40,
          borderBottomWidth: 1,
          paddingBottom: 10,
        }}
      >
        {mobilePhone && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Icons.Phone width={20} height={20} />
            <ThemedText
              style={{
                fontFamily: Mulish.Regular,
                color: natural10,
                fontSize: 16,
              }}
            >
              {mobilePhone}
            </ThemedText>
          </View>
        )}
        {companyPhone && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Icons.Phone
              width={22}
              height={22}
              style={{
                color: primaryOne,
              }}
            />
            <ThemedText
              style={{
                fontFamily: Mulish.Regular,
                color: natural10,
                fontSize: 16,
              }}
            >
              {companyPhone}
            </ThemedText>
          </View>
        )}
        {address && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingRight: 20,
            }}
          >
            <Icons.LocationOn
              width={22}
              height={22}
              style={{
                color: primaryOne,
              }}
            />
            <ThemedText
              style={{
                fontFamily: Mulish.Regular,
                color: natural10,
                fontSize: 16,
              }}
            >
              {address}
            </ThemedText>
          </View>
        )}
      </View>
      <ThemedText
        style={{
          fontSize: 16,
          fontFamily: Mulish.Medium,
          color: natural10,
          marginBottom: 10,
        }}
      >
        Çalışma Saatleri
      </ThemedText>
      <View
        style={{
          gap: 10,
          borderBottomColor: natural40,
          borderBottomWidth: 1,
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          <CardIcons.ClockIcon
            width={20}
            height={20}
            style={{
              color: primaryOne,
            }}
          />
          <View>
            {[
              "Pazartesi",
              "Salı",
              "Çarşamba",
              "Perşembe",
              "Cuma",
              "Cumartesi",
              "Pazar",
            ].map((day, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <ThemedText
                  style={{
                    fontFamily: Mulish.Regular,
                    color: natural10,
                    fontSize: 16,
                    width: 100,
                  }}
                >
                  {day}
                </ThemedText>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <ThemedText
                    style={{
                      fontFamily: Mulish.Regular,
                      color: natural10,
                      fontSize: 16,
                    }}
                  >
                    {"null"}
                  </ThemedText>
                  <ThemedText
                    style={{
                      fontFamily: Mulish.Regular,
                      color: natural10,
                      fontSize: 16,
                    }}
                  >
                    {"null"}
                  </ThemedText>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default CompanyDetails;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    paddingHorizontal: 20,
  },
});
