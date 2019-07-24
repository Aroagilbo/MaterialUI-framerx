import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const OutlinedInput: React.SFC = props => {
  return <System.OutlinedInput {...props} style={style} />;
};

OutlinedInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(OutlinedInput, {
  notched: { title: "Notched", type: ControlType.Boolean },
  labelWidth: { title: "LabelWidth", type: ControlType.Number }
});
