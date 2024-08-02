import React from "react";
import ScreenWrapper from "@/components/shared/demo-wrap";

import ThemedButton from "@/components/shared/themed-button/themed-button";

type ThemedButtonProps = {
  size: "small" | "medium" | "large";
  variant: "primary" | "secondary" | "tertiary";
  outline: boolean;
  children: React.ReactNode;
};

const buttons: ThemedButtonProps[] = [
  {
    size: "small",
    variant: "primary",
    outline: false,
    children: "Default Button",
  },
  {
    size: "small",
    variant: "primary",
    outline: true,
    children: "Outline Button",
  },
  {
    size: "medium",
    variant: "secondary",
    outline: false,
    children: "Default Button",
  },
  {
    size: "medium",
    variant: "secondary",
    outline: true,

    children: "Outline Button",
  },
  {
    size: "large",
    variant: "tertiary",
    outline: false,
    children: "Default Button",
  },
  {
    size: "large",
    variant: "tertiary",
    outline: true,

    children: "Outline Button",
  },
];

const ButtonsPage = () => {
  return (
    <ScreenWrapper>
      {buttons.map((button, index) => (
        <ThemedButton style={{ marginBottom: 10 }} key={index} {...button}>
          {button.children}
        </ThemedButton>
      ))}
    </ScreenWrapper>
  );
};

export default ButtonsPage;
