import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const StepContent: React.SFC = props => {
  return <System.StepContent {...props} style={style} />;
};

StepContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StepContent, {
  active: { title: "Active", type: ControlType.Boolean },
  alternativeLabel: { title: "AlternativeLabel", type: ControlType.Boolean },
  completed: { title: "Completed", type: ControlType.Boolean },
  last: { title: "Last", type: ControlType.Boolean },
  optional: { title: "Optional", type: ControlType.Boolean },
  orientation: {
    title: "Orientation",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    type: ControlType.Enum
  },
  transitionDuration: {
    title: "TransitionDuration",
    options: ["auto"],
    optionTitles: ["Auto"],
    type: ControlType.Enum
  }
});
