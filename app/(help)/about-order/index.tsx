import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useGetAboutOrderList } from "@/api/queries/help/get-about-order-list";
import { ScrollView } from "react-native-gesture-handler";
import AnimatedSpinner from "@/components/shared/spinner/spinner";
import { buttonShadow, natural20 } from "@/constants/colors";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { useRouter } from "expo-router";

const AboutOrder = () => {
  const { data, isLoading, isError } = useGetAboutOrderList();
  const router = useRouter();

  console.log("data", data);

  if (isLoading) {
    return (
      <View>
        <AnimatedSpinner color="primaryOne" variant="primary" />
      </View>
    );
  }

  if (!data) {
    return <Text>There is no data</Text>;
  }

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 20,
        flex: 1,
        backgroundColor: "white",
        gap: 10,
      }}
    >
      {data?.map((item) => (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.button}
          key={item.id}
          onPress={() => router.push(`/(help)/about-order/${item.id}`)}
        >
          <ThemedText
            style={{
              color: natural20,
            }}
          >
            {item.question}
          </ThemedText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default AboutOrder;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",

    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    minHeight: 50,
    justifyContent: "center",
    ...buttonShadow,
  },
});
