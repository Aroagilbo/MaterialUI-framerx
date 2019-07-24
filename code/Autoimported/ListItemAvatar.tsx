import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const ListItemAvatar: React.SFC = props => {
  return <System.ListItemAvatar {...props} style={style} />;
};

ListItemAvatar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ListItemAvatar, {});
