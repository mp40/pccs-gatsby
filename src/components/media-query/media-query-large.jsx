import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const MediaQueryLarge = ({ children }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // define callback as separate function so it can be removed later with cleanup function
    const onChangeHandler = (event) => {
      setShow(event.matches);
    };

    // listener
    window
      .matchMedia("(min-width: 761px)")
      .addEventListener("change", onChangeHandler);

    // clean up event listener
    return () => {
      window
        .matchMedia("(min-width: 761px)")
        .addEventListener("change", onChangeHandler);
    };
  }, []);

  if (!show) {
    return null;
  }

  return children;
};

MediaQueryLarge.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MediaQueryLarge;
