import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const DialogTitle: React.SFC = props => {
  return <System.DialogTitle {...props} style={style} />;
};

DialogTitle.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DialogTitle, {
  disableTypography: { title: "DisableTypography", type: ControlType.Boolean }
});
