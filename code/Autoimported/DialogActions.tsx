import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const DialogActions: React.SFC = props => {
  return <System.DialogActions {...props} style={style} />;
};

DialogActions.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DialogActions, {
  disableSpacing: { title: "DisableSpacing", type: ControlType.Boolean }
});
