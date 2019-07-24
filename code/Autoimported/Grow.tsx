import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Grow: React.SFC = props => {
  return <System.Grow {...props} style={style} />;
};

Grow.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Grow, {
  timeout: {
    title: "Timeout",
    options: ["auto"],
    optionTitles: ["Auto"],
    type: ControlType.Enum
  }
});
