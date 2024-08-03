import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { primaryOne, secondaryOne, tertiaryOne } from "@/constants/colors";
import Icons from "@/components/shared/icons/icons";
import Poppins from "@/constants/font";
type Props = {
  list: Array<any>;
  value: { label: string; value: string } | null;
  setValue: React.Dispatch<
    React.SetStateAction<null | { label: string; value: string }>
  >;
};

// const renderLabel = () => {
//   if (value || isFocus) {
//     return (
//       <Text style={[styles.label, isFocus && { color: "blue" }]}>
//         Dropdown label
//       </Text>
//     );
//   }
//   return null;
// };

const ThemedDropdown = (props: Props) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[
        styles.dropdown,
        isFocus && { borderColor: primaryOne, borderWidth: 2 },
      ]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={props.list}
      search={false} //for
      maxHeight={300}
      accessibilityLabel="Select item"
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? "Select item" : ""}
      searchPlaceholder="Search..."
      value={props.value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item: { label: string; value: string }) => {
        props.setValue(item);
        setIsFocus(false);
      }}
      renderRightIcon={() => {
        if (isFocus) {
          return (
            <Icons.ChevronUp
              style={{
                color: primaryOne,
              }}
            />
          );
        } else {
          return (
            <Icons.ChevronDown
              style={{
                color: primaryOne,
              }}
            />
          );
        }
      }}
      renderLeftIcon={() => <Text></Text>}
      renderItem={(item, selected) => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,

            paddingHorizontal: 8,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: selected ? tertiaryOne : primaryOne,
              fontWeight: "500",
              lineHeight: 24,
              fontFamily: Poppins.Regular,
            }}
          >
            {item.label}
          </Text>
          {selected && <Icons.Check />}
        </View>
      )}
    />
  );
};

export default ThemedDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: primaryOne,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: Poppins.Regular,
    color: primaryOne,
    fontWeight: "500",
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: Poppins.Regular,
    color: primaryOne,
    fontWeight: "500",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
