import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Slide: React.SFC = props => {
  return <System.Slide {...props} style={style} />;
};

Slide.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Slide, {
  direction: {
    title: "Direction",
    options: ["left", "right", "up", "down"],
    optionTitles: ["Left", "Right", "Up", "Down"],
    type: ControlType.Enum
  },
  appear: { title: "Appear", type: ControlType.Boolean },
  enter: { title: "Enter", type: ControlType.Boolean },
  exit: { title: "Exit", type: ControlType.Boolean }
});
