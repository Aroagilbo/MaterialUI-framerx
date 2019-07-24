import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const LinearProgress: React.SFC = props => {
  return <System.LinearProgress {...props} style={style} />;
};

LinearProgress.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(LinearProgress, {
  color: {
    title: "Color",
    options: ["primary", "secondary"],
    optionTitles: ["Primary", "Secondary"],
    type: ControlType.Enum
  },
  value: { title: "Value", type: ControlType.Number },
  valueBuffer: { title: "ValueBuffer", type: ControlType.Number },
  variant: {
    title: "Variant",
    options: ["indeterminate", "determinate", "buffer", "query"],
    optionTitles: ["Indeterminate", "Determinate", "Buffer", "Query"],
    type: ControlType.Enum
  }
});
