import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const TextField: React.SFC = props => {
  return <System.TextField {...props} style={style} />;
};

TextField.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TextField, {
  autoComplete: { title: "AutoComplete", type: ControlType.String },
  autoFocus: { title: "AutoFocus", type: ControlType.Boolean },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  error: { title: "Error", type: ControlType.Boolean },
  fullWidth: { title: "FullWidth", type: ControlType.Boolean },
  id: { title: "Id", type: ControlType.String },
  margin: {
    title: "Margin",
    options: ["normal", "none", "dense"],
    optionTitles: ["Normal", "None", "Dense"],
    type: ControlType.Enum
  },
  multiline: { title: "Multiline", type: ControlType.Boolean },
  name: { title: "Name", type: ControlType.String },
  placeholder: { title: "Placeholder", type: ControlType.String },
  required: { title: "Required", type: ControlType.Boolean },
  select: { title: "Select", type: ControlType.Boolean },
  type: { title: "Type", type: ControlType.String }
});
