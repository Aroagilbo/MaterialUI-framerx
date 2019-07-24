import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const CircularProgress: React.SFC = props => {
  return <System.CircularProgress {...props} style={style} />;
};

CircularProgress.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CircularProgress, {
  color: {
    title: "Color",
    options: ["inherit", "primary", "secondary"],
    optionTitles: ["Inherit", "Primary", "Secondary"],
    type: ControlType.Enum
  },
  disableShrink: { title: "DisableShrink", type: ControlType.Boolean },
  thickness: { title: "Thickness", type: ControlType.Number },
  value: { title: "Value", type: ControlType.Number },
  variant: {
    title: "Variant",
    options: ["static", "indeterminate", "determinate"],
    optionTitles: ["Static", "Indeterminate", "Determinate"],
    type: ControlType.Enum
  }
});
