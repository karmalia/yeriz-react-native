import { Theme } from "@react-navigation/native";
import { natural30, primaryOne, secondaryFour, secondaryOne } from "./colors";

const LightPhoneTheme: Theme = {
  dark: false,
  colors: {
    primary: "green",
    background: "white",
    card: "white",
    text: primaryOne,
    border: primaryOne,
    notification: "green",
  },
};

const DarkPhoneTheme: Theme = {
  dark: true,
  colors: {
    primary: "green",
    background: natural30,
    card: secondaryFour,
    text: secondaryOne,
    border: "green",
    notification: "green",
  },
};

export default { LightPhoneTheme, DarkPhoneTheme };
