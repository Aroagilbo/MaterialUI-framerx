import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const FormGroup: React.SFC = props => {
  return <System.FormGroup {...props} style={style} />;
};

FormGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FormGroup, {
  row: { title: "Row", type: ControlType.Boolean }
});
