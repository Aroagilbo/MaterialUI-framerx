import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Menu: React.SFC = props => {
  return <System.Menu {...props} style={style} />;
};

Menu.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Menu, {
  autoFocus: { title: "AutoFocus", type: ControlType.Boolean },
  disableAutoFocusItem: {
    title: "DisableAutoFocusItem",
    type: ControlType.Boolean
  },
  transitionDuration: {
    title: "TransitionDuration",
    options: ["auto"],
    optionTitles: ["Auto"],
    type: ControlType.Enum
  },
  variant: {
    title: "Variant",
    options: ["menu", "selectedMenu"],
    optionTitles: ["Menu", "SelectedMenu"],
    type: ControlType.Enum
  }
});
