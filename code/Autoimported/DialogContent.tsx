import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const DialogContent: React.SFC = props => {
  return <System.DialogContent {...props} style={style} />;
};

DialogContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DialogContent, {
  dividers: { title: "Dividers", type: ControlType.Boolean }
});
