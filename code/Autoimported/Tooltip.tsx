import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Tooltip: React.SFC = props => {
  return <System.Tooltip {...props} style={style} />;
};

Tooltip.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tooltip, {
  disableFocusListener: {
    title: "DisableFocusListener",
    type: ControlType.Boolean
  },
  disableHoverListener: {
    title: "DisableHoverListener",
    type: ControlType.Boolean
  },
  disableTouchListener: {
    title: "DisableTouchListener",
    type: ControlType.Boolean
  },
  enterDelay: { title: "EnterDelay", type: ControlType.Number },
  enterTouchDelay: { title: "EnterTouchDelay", type: ControlType.Number },
  id: { title: "Id", type: ControlType.String },
  interactive: { title: "Interactive", type: ControlType.Boolean },
  leaveDelay: { title: "LeaveDelay", type: ControlType.Number },
  leaveTouchDelay: { title: "LeaveTouchDelay", type: ControlType.Number },
  open: { title: "Open", type: ControlType.Boolean },
  placement: {
    title: "Placement",
    options: [
      "bottom",
      "left",
      "right",
      "top",
      "bottom-end",
      "bottom-start",
      "left-end",
      "left-start",
      "right-end",
      "right-start",
      "top-end",
      "top-start"
    ],
    optionTitles: [
      "Bottom",
      "Left",
      "Right",
      "Top",
      "Bottom-end",
      "Bottom-start",
      "Left-end",
      "Left-start",
      "Right-end",
      "Right-start",
      "Top-end",
      "Top-start"
    ],
    type: ControlType.Enum
  }
});
