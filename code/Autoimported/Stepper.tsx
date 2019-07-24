import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Stepper: React.SFC = props => {
  return <System.Stepper {...props} style={style} />;
};

Stepper.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Stepper, {
  activeStep: { title: "ActiveStep", type: ControlType.Number },
  alternativeLabel: { title: "AlternativeLabel", type: ControlType.Boolean },
  nonLinear: { title: "NonLinear", type: ControlType.Boolean },
  orientation: {
    title: "Orientation",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    type: ControlType.Enum
  }
});
