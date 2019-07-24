import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const ExpansionPanel: React.SFC = props => {
  return <System.ExpansionPanel {...props} style={style} />;
};

ExpansionPanel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ExpansionPanel, {
  defaultExpanded: { title: "DefaultExpanded", type: ControlType.Boolean },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  expanded: { title: "Expanded", type: ControlType.Boolean }
});
