import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const StepIcon: React.SFC = props => {
  return <System.StepIcon {...props} style={style} />;
};

StepIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StepIcon, {
  active: { title: "Active", type: ControlType.Boolean },
  completed: { title: "Completed", type: ControlType.Boolean },
  error: { title: "Error", type: ControlType.Boolean }
});
