import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const ClickAwayListener: React.SFC = props => {
  return <System.ClickAwayListener {...props} style={style} />;
};

ClickAwayListener.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ClickAwayListener, {
  mouseEvent: {
    title: "MouseEvent",
    options: ["onClick", "onMouseDown", "onMouseUp"],
    optionTitles: ["OnClick", "OnMouseDown", "OnMouseUp"],
    type: ControlType.Enum
  },
  touchEvent: {
    title: "TouchEvent",
    options: ["onTouchEnd", "onTouchStart"],
    optionTitles: ["OnTouchEnd", "OnTouchStart"],
    type: ControlType.Enum
  }
});
