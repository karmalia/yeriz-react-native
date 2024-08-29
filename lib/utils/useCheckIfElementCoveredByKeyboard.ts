import React from "react";
import { Dimensions } from "react-native";

function useCheckIfElementCoveredByKeyboard(
  keyboardHeight: number,
  elementRef: React.MutableRefObject<any>
): boolean {
  const [isCovered, setIsCovered] = React.useState(false);

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
