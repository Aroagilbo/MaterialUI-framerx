import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const SwipeableDrawer: React.SFC = props => {
  return <System.SwipeableDrawer {...props} style={style} />;
};

SwipeableDrawer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SwipeableDrawer, {
  disableBackdropTransition: {
    title: "DisableBackdropTransition",
    type: ControlType.Boolean
  },
  disableDiscovery: { title: "DisableDiscovery", type: ControlType.Boolean },
  disableSwipeToOpen: {
    title: "DisableSwipeToOpen",
    type: ControlType.Boolean
  },
  hysteresis: { title: "Hysteresis", type: ControlType.Number },
  minFlingVelocity: { title: "MinFlingVelocity", type: ControlType.Number },
  open: { title: "Open", type: ControlType.Boolean },
  swipeAreaWidth: { title: "SwipeAreaWidth", type: ControlType.Number }
});
