import React from "react";
import { useLocation } from "react-router-dom";

export default function useLocationChange(callback) {
  const location = useLocation();
  const previousLocation = usePrevious(location);

  React.useEffect(() => {
    if (previousLocation?.pathname !== location.pathname) {
      callback();
    }
  }, [location, previousLocation, callback]);
}

function usePrevious(value) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
