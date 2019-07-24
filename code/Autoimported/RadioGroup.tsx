import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const RadioGroup: React.SFC = props => {
  return <System.RadioGroup {...props} style={style} />;
};

RadioGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(RadioGroup, {
  name: { title: "Name", type: ControlType.String },
  value: { title: "Value", type: ControlType.String }
});
