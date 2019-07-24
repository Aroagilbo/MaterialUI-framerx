import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Input: React.SFC = props => {
  return <System.Input {...props} style={style} />;
};

Input.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Input, {
  disableUnderline: { title: "DisableUnderline", type: ControlType.Boolean }
});
