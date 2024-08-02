import React from "react";
import ScreenWrapper from "@/components/shared/demo-wrap";
import { Text, View } from "react-native";
import ThemedRadio from "@/components/shared/themed-radio/themed-radio";
import { primaryOne } from "@/constants/colors";
import Poppins from "@/constants/font";

const DemoRadioButtonsPage = () => {
  const [selected, setSelected] = React.useState<number | string | null>(null);

  const dummyOptions = [
    {
      id: 1,
      label: "Option 1",
    },
    {
      id: 2,
      label: "Option 2",
    },
    {
      id: 3,
      label: "Option 3",
    },
    {
      id: 4,
      label: "Option 4",
    },
  ];
  return (
    <ScreenWrapper>
      <Text
        style={{
          fontFamily: Poppins.Regular,
          fontSize: 20,
          lineHeight: 24,
          color: primaryOne,
          marginBottom: 20,
        }}
      >
        Aşağılardakilerden hangisi aşağıdadır?
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {dummyOptions.map((option) => (
          <ThemedRadio
            key={option.id}
            label={option.label}
            height={20}
            fontSize={12}
            onPress={setSelected}
            id={option.id}
            isSelected={selected === option.id}
          />
        ))}
      </View>
    </ScreenWrapper>
  );
};

export default DemoRadioButtonsPage;
