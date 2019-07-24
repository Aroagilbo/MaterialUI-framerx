import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Dialog: React.SFC = props => {
  return <System.Dialog {...props} style={style} />;
};

Dialog.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Dialog, {
  fullScreen: { title: "FullScreen", type: ControlType.Boolean },
  fullWidth: { title: "FullWidth", type: ControlType.Boolean },
  maxWidth: {
    title: "MaxWidth",
    options: ["xs", "sm", "md", "lg", "xl"],
    optionTitles: ["Xs", "Sm", "Md", "Lg", "Xl"],
    type: ControlType.Enum
  },
  scroll: {
    title: "Scroll",
    options: ["body", "paper"],
    optionTitles: ["Body", "Paper"],
    type: ControlType.Enum
  }
});
