import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const FilledInput: React.SFC = props => {
  return <System.FilledInput {...props} style={style} />;
};

FilledInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FilledInput, {
  disableUnderline: { title: "DisableUnderline", type: ControlType.Boolean }
});
