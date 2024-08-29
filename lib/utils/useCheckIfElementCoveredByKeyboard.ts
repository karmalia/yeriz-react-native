import React from "react";
import { Dimensions } from "react-native";
import { KeyboardEvents } from "react-native-keyboard-controller";

function useCheckIfElementCoveredByKeyboard(
  elementRef: React.MutableRefObject<any>
) {
  const [isCovered, setIsCovered] = React.useState(false);
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  React.useEffect(() => {
    const show = KeyboardEvents.addListener("keyboardDidShow", (e) => {
      setKeyboardHeight(e.height);
    });

    const close = KeyboardEvents.addListener("keyboardDidHide", (e) => {
      setKeyboardHeight(0);
    });

    return () => {
      show.remove();
      close.remove();
    };
  }, []);

  React.useEffect(() => {
    if (!elementRef?.current) return;

    elementRef.current.measure((_1, _2, _3, height, _4, pageY) => {
      if (pageY + height >= Dimensions.get("window").height - keyboardHeight) {
        setIsCovered(true);
      } else {
        setIsCovered(false);
      }
    });
  }, [keyboardHeight, elementRef]);

  return isCovered;
}

export default useCheckIfElementCoveredByKeyboard;
