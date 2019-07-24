import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const RootRef: React.SFC = props => {
  return <System.RootRef {...props} style={style} />;
};

RootRef.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(RootRef, {});
