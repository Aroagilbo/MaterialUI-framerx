import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Backdrop: React.SFC = props => {
  return <System.Backdrop {...props} style={style} />;
};

Backdrop.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Backdrop, {
  invisible: { title: "Invisible", type: ControlType.Boolean },
  open: { title: "Open", type: ControlType.Boolean }
});
