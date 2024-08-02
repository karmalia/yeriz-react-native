import { View, Text } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "@/components/shared/demo-wrap";
import ThemedDropdown from "@/components/shared/themed-dropdown/themed-dropdown";

type Props = {};

const DropDowns = (props: Props) => {
  const [value, setValue] = useState<null | {
    label: string;
    value: string;
  }>(null);

  const dummyList = [
    {
      label: "Option 1",
      value: "option1",
    },
    {
      label: "Option 2",
      value: "option2",
    },
    {
      label: "Option 3",
      value: "option3",
    },
  ];
  return (
    <ScreenWrapper>
      <Text
        style={{
          color: "black",
          fontSize: 20,
          textAlign: "center",
          marginTop: 20,
          paddingVertical: 10,
        }}
      >
        DropDowns
      </Text>
      <ThemedDropdown value={value} setValue={setValue} list={dummyList} />
      <Text>
        {value ? `Selected value: ${value.label}` : "No value selected"}
      </Text>
    </ScreenWrapper>
  );
};

export default DropDowns;
