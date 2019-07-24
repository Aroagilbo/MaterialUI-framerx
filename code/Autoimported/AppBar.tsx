import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const AppBar: React.SFC = props => {
  return <System.AppBar {...props} style={style} />;
};

AppBar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(AppBar, {
  color: {
    title: "Color",
    options: ["inherit", "primary", "secondary", "default"],
    optionTitles: ["Inherit", "Primary", "Secondary", "Default"],
    type: ControlType.Enum
  },
  position: {
    title: "Position",
    options: ["fixed", "absolute", "sticky", "static", "relative"],
    optionTitles: ["Fixed", "Absolute", "Sticky", "Static", "Relative"],
    type: ControlType.Enum
  }
});
