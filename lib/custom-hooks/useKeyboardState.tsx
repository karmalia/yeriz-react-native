import { Keyboard } from "react-native";
import React from "react";

const useKeyboardState = () => {
  const [keyboardState, setKeyboardState] = React.useState<boolean>(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardState(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardState(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return {
    keyboardState,
    setKeyboardState,
  };
};

export default useKeyboardState;
