import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const GridListTileBar: React.SFC = props => {
  return <System.GridListTileBar {...props} style={style} />;
};

GridListTileBar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(GridListTileBar, {
  actionPosition: {
    title: "ActionPosition",
    options: ["left", "right"],
    optionTitles: ["Left", "Right"],
    type: ControlType.Enum
  },
  titlePosition: {
    title: "TitlePosition",
    options: ["bottom", "top"],
    optionTitles: ["Bottom", "Top"],
    type: ControlType.Enum
  }
});
