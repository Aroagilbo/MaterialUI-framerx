import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const CssBaseline: React.SFC = props => {
  return <System.CssBaseline {...props} style={style} />;
};

CssBaseline.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CssBaseline, {});
