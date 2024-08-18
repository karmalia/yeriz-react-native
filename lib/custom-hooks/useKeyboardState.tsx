import { DeviceEventEmitter, Keyboard } from "react-native";
import React from "react";

const useKeyboardState = () => {
  const [keyboardState, setKeyboardState] = React.useState<boolean>(false);
  const [keyboardWillShow, setKeyboardWillShow] =
    React.useState<boolean>(false);
  function hideKeyboard() {
    Keyboard.dismiss();
  }

  const keyboardMetrics = Keyboard.metrics();

  function showKeyboard() {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardState(true);
    });
  }

  React.useEffect(() => {
    const keyboardWillShowListener = DeviceEventEmitter.addListener(
      "keyboardWillShow",
      () => {
        console.log("keyboardWillShow");
        setKeyboardWillShow(true);
      }
    );

    const keyboardWillHideListener = DeviceEventEmitter.addListener(
      "keyboardWillHide",
      () => {
        console.log("keyboardWillHide");
        setKeyboardWillShow(false);
      }
    );

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
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, [keyboardState, keyboardWillShow]);

  return {
    keyboardState,
    setKeyboardState,
    hideKeyboard,
    showKeyboard,
    keyboardWillShow,
    keyboardMetrics,
  };
};

export default useKeyboardState;
