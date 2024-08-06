import { Keyboard } from "react-native";
import React from "react";

const useKeyboardState = () => {
  const [keyboardState, setKeyboardState] = React.useState<boolean>(false);

  function hideKeyboard() {
    Keyboard.dismiss();
  }

  function showKeyboard() {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardState(true);
    });
  }

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
  }, [keyboardState]);

  return {
    keyboardState,
    setKeyboardState,
    hideKeyboard,
    showKeyboard,
  };
};

export default useKeyboardState;
