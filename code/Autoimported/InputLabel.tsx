import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const InputLabel: React.SFC = props => {
  return <System.InputLabel {...props} style={style} />;
};

InputLabel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(InputLabel, {
  disableAnimation: { title: "DisableAnimation", type: ControlType.Boolean },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  error: { title: "Error", type: ControlType.Boolean },
  focused: { title: "Focused", type: ControlType.Boolean },
  required: { title: "Required", type: ControlType.Boolean },
  shrink: { title: "Shrink", type: ControlType.Boolean },
  variant: {
    title: "Variant",
    options: ["filled", "standard", "outlined"],
    optionTitles: ["Filled", "Standard", "Outlined"],
    type: ControlType.Enum
  }
});
