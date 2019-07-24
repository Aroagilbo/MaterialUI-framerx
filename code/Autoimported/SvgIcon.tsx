import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const SvgIcon: React.SFC = props => {
  return <System.SvgIcon {...props} style={style} />;
};

SvgIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SvgIcon, {
  color: {
    title: "Color",
    options: [
      "inherit",
      "primary",
      "secondary",
      "default",
      "error",
      "disabled",
      "action"
    ],
    optionTitles: [
      "Inherit",
      "Primary",
      "Secondary",
      "Default",
      "Error",
      "Disabled",
      "Action"
    ],
    type: ControlType.Enum
  },
  component: {
    title: "Component",
    options: [
      "symbol",
      "svg",
      "animate",
      "animateMotion",
      "animateTransform",
      "defs",
      "desc",
      "feDropShadow",
      "foreignObject",
      "g",
      "metadata",
      "mpath",
      "switch"
    ],
    optionTitles: [
      "Symbol",
      "Svg",
      "Animate",
      "AnimateMotion",
      "AnimateTransform",
      "Defs",
      "Desc",
      "FeDropShadow",
      "ForeignObject",
      "G",
      "Metadata",
      "Mpath",
      "Switch"
    ],
    type: ControlType.Enum
  },
  fontSize: {
    title: "FontSize",
    options: ["inherit", "default", "small", "large"],
    optionTitles: ["Inherit", "Default", "Small", "Large"],
    type: ControlType.Enum
  },
  htmlColor: { title: "HtmlColor", type: ControlType.String },
  shapeRendering: { title: "ShapeRendering", type: ControlType.String },
  titleAccess: { title: "TitleAccess", type: ControlType.String },
  viewBox: { title: "ViewBox", type: ControlType.String }
});
