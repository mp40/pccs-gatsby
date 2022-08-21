import React from "react";
import MediaQueryLarge from "../media-query/media-query-large";
import { Link } from "gatsby";
import { container } from "./navigation.module.css";

const Navigation = () => {
  return (
    <MediaQueryLarge>
      <div className={container}>
        <Link to="/">Home</Link>
        <Link to="/hand-to-hand">Hand To Hand</Link>
        <Link to="/shotguns">Shotguns</Link>
      </div>
    </MediaQueryLarge>
  );
};

export default Navigation;
