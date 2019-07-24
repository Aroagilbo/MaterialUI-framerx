import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Drawer: React.SFC = props => {
  return <System.Drawer {...props} style={style} />;
};

Drawer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Drawer, {
  anchor: {
    title: "Anchor",
    options: ["bottom", "left", "right", "top"],
    optionTitles: ["Bottom", "Left", "Right", "Top"],
    type: ControlType.Enum
  },
  elevation: { title: "Elevation", type: ControlType.Number },
  open: { title: "Open", type: ControlType.Boolean },
  variant: {
    title: "Variant",
    options: ["permanent", "persistent", "temporary"],
    optionTitles: ["Permanent", "Persistent", "Temporary"],
    type: ControlType.Enum
  }
});
