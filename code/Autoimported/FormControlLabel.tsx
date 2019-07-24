import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const FormControlLabel: React.SFC = props => {
  return <System.FormControlLabel {...props} style={style} />;
};

FormControlLabel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FormControlLabel, {
  checked: { title: "Checked", type: ControlType.Boolean },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  name: { title: "Name", type: ControlType.String },
  labelPlacement: {
    title: "LabelPlacement",
    options: ["end", "start", "bottom", "top"],
    optionTitles: ["End", "Start", "Bottom", "Top"],
    type: ControlType.Enum
  }
});
