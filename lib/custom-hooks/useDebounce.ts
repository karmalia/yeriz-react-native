import React from "react";

const useDebounce = (func, wait) => {
  const timeoutRef = React.useRef(null);

  return React.useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        func(...args);
      }, wait);
    },
    [func, wait]
  );
};

export default useDebounce;
