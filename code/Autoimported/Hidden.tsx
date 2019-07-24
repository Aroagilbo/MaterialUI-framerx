import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Hidden: React.SFC = props => {
  return <System.Hidden {...props} style={style} />;
};

Hidden.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Hidden, {
  implementation: {
    title: "Implementation",
    options: ["js", "css"],
    optionTitles: ["Js", "Css"],
    type: ControlType.Enum
  },
  initialWidth: {
    title: "InitialWidth",
    options: ["xs", "sm", "md", "lg", "xl"],
    optionTitles: ["Xs", "Sm", "Md", "Lg", "Xl"],
    type: ControlType.Enum
  },
  lgDown: { title: "LgDown", type: ControlType.Boolean },
  lgUp: { title: "LgUp", type: ControlType.Boolean },
  mdDown: { title: "MdDown", type: ControlType.Boolean },
  mdUp: { title: "MdUp", type: ControlType.Boolean },
  only: {
    title: "Only",
    options: ["xs", "sm", "md", "lg", "xl"],
    optionTitles: ["Xs", "Sm", "Md", "Lg", "Xl"],
    type: ControlType.Enum
  },
  smDown: { title: "SmDown", type: ControlType.Boolean },
  smUp: { title: "SmUp", type: ControlType.Boolean },
  xlDown: { title: "XlDown", type: ControlType.Boolean },
  xlUp: { title: "XlUp", type: ControlType.Boolean },
  xsDown: { title: "XsDown", type: ControlType.Boolean },
  xsUp: { title: "XsUp", type: ControlType.Boolean }
});
