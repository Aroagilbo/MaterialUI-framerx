import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const DialogContentText: React.SFC = props => {
  return <System.DialogContentText {...props} style={style} />;
};

DialogContentText.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DialogContentText, {});
