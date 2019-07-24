import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Snackbar: React.SFC = props => {
  return <System.Snackbar {...props} style={style} />;
};

Snackbar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Snackbar, {
  autoHideDuration: { title: "AutoHideDuration", type: ControlType.Number },
  disableWindowBlurListener: {
    title: "DisableWindowBlurListener",
    type: ControlType.Boolean
  },
  open: { title: "Open", type: ControlType.Boolean },
  resumeHideDuration: { title: "ResumeHideDuration", type: ControlType.Number }
});
