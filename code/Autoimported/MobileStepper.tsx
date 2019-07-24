import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const MobileStepper: React.SFC = props => {
  return <System.MobileStepper {...props} style={style} />;
};

MobileStepper.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(MobileStepper, {
  activeStep: { title: "ActiveStep", type: ControlType.Number },
  position: {
    title: "Position",
    options: ["static", "bottom", "top"],
    optionTitles: ["Static", "Bottom", "Top"],
    type: ControlType.Enum
  },
  steps: { title: "Steps", type: ControlType.Number },
  variant: {
    title: "Variant",
    options: ["progress", "text", "dots"],
    optionTitles: ["Progress", "Text", "Dots"],
    type: ControlType.Enum
  }
});
