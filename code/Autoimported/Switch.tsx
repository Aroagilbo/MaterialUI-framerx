import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Switch: React.SFC = props => {
  return <System.Switch {...props} style={style} />;
};

Switch.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Switch, {
  color: {
    title: "Color",
    options: ["primary", "secondary", "default"],
    optionTitles: ["Primary", "Secondary", "Default"],
    type: ControlType.Enum
  }
});
