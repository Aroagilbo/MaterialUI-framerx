import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const MenuList: React.SFC = props => {
  return <System.MenuList {...props} style={style} />;
};

MenuList.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(MenuList, {
  autoFocus: { title: "AutoFocus", type: ControlType.Boolean },
  disableListWrap: { title: "DisableListWrap", type: ControlType.Boolean }
});
