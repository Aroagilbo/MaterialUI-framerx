import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Card: React.SFC = props => {
  return <System.Card {...props} style={style} />;
};

Card.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Card, {
  raised: { title: "Raised", type: ControlType.Boolean }
});
