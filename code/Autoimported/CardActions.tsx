import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const CardActions: React.SFC = props => {
  return <System.CardActions {...props} style={style} />;
};

CardActions.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CardActions, {
  disableSpacing: { title: "DisableSpacing", type: ControlType.Boolean }
});
