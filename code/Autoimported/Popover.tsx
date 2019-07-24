import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Popover: React.SFC = props => {
  return <System.Popover {...props} style={style} />;
};

Popover.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Popover, {
  anchorReference: {
    title: "AnchorReference",
    options: ["none", "anchorEl", "anchorPosition"],
    optionTitles: ["None", "AnchorEl", "AnchorPosition"],
    type: ControlType.Enum
  },
  elevation: { title: "Elevation", type: ControlType.Number },
  marginThreshold: { title: "MarginThreshold", type: ControlType.Number },
  modal: { title: "Modal", type: ControlType.Boolean },
  role: { title: "Role", type: ControlType.String },
  transitionDuration: {
    title: "TransitionDuration",
    options: ["auto"],
    optionTitles: ["Auto"],
    type: ControlType.Enum
  }
});
