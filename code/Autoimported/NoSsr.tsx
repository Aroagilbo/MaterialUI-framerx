import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const NoSsr: React.SFC = props => {
  return <System.NoSsr {...props} style={style} />;
};

NoSsr.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NoSsr, {
  defer: { title: "Defer", type: ControlType.Boolean }
});
