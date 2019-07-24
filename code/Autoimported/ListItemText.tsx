import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const ListItemText: React.SFC = props => {
  return <System.ListItemText {...props} style={style} />;
};

ListItemText.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ListItemText, {
  disableTypography: { title: "DisableTypography", type: ControlType.Boolean },
  inset: { title: "Inset", type: ControlType.Boolean }
});
