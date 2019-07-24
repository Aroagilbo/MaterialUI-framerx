import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Checkbox: React.SFC = props => {
  return <System.Checkbox {...props} style={style} />;
};

Checkbox.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Checkbox, {
  color: {
    title: "Color",
    options: ["primary", "secondary", "default"],
    optionTitles: ["Primary", "Secondary", "Default"],
    type: ControlType.Enum
  },
  indeterminate: { title: "Indeterminate", type: ControlType.Boolean }
});
