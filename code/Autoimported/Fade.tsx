import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Fade: React.SFC = props => {
  return <System.Fade {...props} style={style} />;
};

Fade.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Fade, {
  appear: { title: "Appear", type: ControlType.Boolean },
  enter: { title: "Enter", type: ControlType.Boolean },
  exit: { title: "Exit", type: ControlType.Boolean }
});
