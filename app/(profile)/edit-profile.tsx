import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useLocalSearchParams } from "expo-router";
import { natural20, natural30, primaryOne } from "@/constants/colors";
import ThemedButton from "@/components/shared/themed-button/themed-button";

type Props = {};

const EditProfile = (props: Props) => {
  const params = useLocalSearchParams<{ title: string; value: string }>();
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<TextInput>(null);

  React.useEffect(() => {
    setValue(params.value);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={{
          borderBottomWidth: 1,
          borderColor: natural30,
          borderRadius: 4,
          padding: 10,
          color: natural20,
        }}
        onLayout={() => {
          inputRef.current && inputRef.current.focus();
        }}
        placeholder={`${params.title} giriniz`}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <ThemedButton
        onPress={() => {
          console.log("Kaydet");
        }}
        size={"large"}
        variant={value === params.value ? "disabled" : "primary"}
        outline={false}
        disabled={value === params.value}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: "Mulish-SemiBold",
          }}
        >
          Kaydet
        </Text>
      </ThemedButton>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
  },
});
