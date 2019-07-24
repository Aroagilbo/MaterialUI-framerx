import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const ExpansionPanelActions: React.SFC = props => {
  return <System.ExpansionPanelActions {...props} style={style} />;
};

ExpansionPanelActions.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ExpansionPanelActions, {});
