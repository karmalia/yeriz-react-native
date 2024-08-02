import React from "react";
import ScreenWrapper from "@/components/shared/demo-wrap";

import { Text } from "react-native";
import ThemedCheckbox from "@/components/shared/themed-checkbox/themed-checkbox";
import { View } from "react-native";
import { primaryOne, secondaryOne } from "@/constants/colors";
import Poppins from "@/constants/font";

const DemoCheckboxesPage = () => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleSelectedItems = (value: any) => {
    const index = selectedItems.indexOf(value.value);
    if (index > -1) {
      setSelectedItems(selectedItems.filter((item) => item !== value.value));
    } else {
      setSelectedItems([...selectedItems, value.value]);
    }
  };

  const dummyCheckboxes = [
    {
      id: 1,
      label: "Checkbox 1",
      height: 16,
      fontSize: 12,

      value: {
        id: 1,
        value: "1",
      },
    },
    {
      id: 2,
      label: "Checkbox 2",

      value: {
        id: 2,
        value: "2",
      },
    },
    {
      id: 3,
      label: "Checkbox 3",
      height: 30,
      fontSize: 24,

      value: {
        id: 3,
        value: "3",
      },
    },
    {
      id: 4,
      label: "Checkbox 4",
      height: 35,
      fontSize: 32,

      color: secondaryOne,
      value: {
        id: 4,
        value: "4",
      },
    },
  ];

  return (
    <ScreenWrapper>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {dummyCheckboxes.map((checkbox) => (
          <ThemedCheckbox
            key={checkbox.id}
            label={checkbox.label}
            height={checkbox.height}
            fontSize={checkbox.fontSize}
            onPress={handleSelectedItems}
            value={checkbox.value}
            color={checkbox.color}
          />
        ))}
      </View>
      <View>
        <Text
          style={{
            color: primaryOne,
            fontSize: 20,
            fontFamily: Poppins.Regular,
          }}
        >
          Selected: {selectedItems.join(", ")}
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default DemoCheckboxesPage;
