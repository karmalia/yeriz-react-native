import useKeyboardStore from "@/stores/keyboardStore";
import React from "react";
import { Dimensions } from "react-native";
import { KeyboardEvents } from "react-native-keyboard-controller";

function useCheckIfElementCoveredByKeyboard(
  elementRef: React.MutableRefObject<any>
) {
  const { setIsCovered } = useKeyboardStore();
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
        setIsCovered({
          on: true,
          space:
            pageY + height - (Dimensions.get("window").height - keyboardHeight),
        });
      }

      if (keyboardHeight === 0) {
        setIsCovered({
          on: false,
          space: 0,
        });
      }
    });
  }, [keyboardHeight, elementRef]);

  return null;
}

export default useCheckIfElementCoveredByKeyboard;
