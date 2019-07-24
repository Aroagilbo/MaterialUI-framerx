import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Grid: React.SFC = props => {
  return <System.Grid {...props} style={style} />;
};

Grid.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Grid, {
  alignContent: {
    title: "AlignContent",
    options: [
      "space-around",
      "space-between",
      "stretch",
      "center",
      "flex-end",
      "flex-start"
    ],
    optionTitles: [
      "Space-around",
      "Space-between",
      "Stretch",
      "Center",
      "Flex-end",
      "Flex-start"
    ],
    type: ControlType.Enum
  },
  alignItems: {
    title: "AlignItems",
    options: ["stretch", "center", "flex-end", "flex-start", "baseline"],
    optionTitles: ["Stretch", "Center", "Flex-end", "Flex-start", "Baseline"],
    type: ControlType.Enum
  },
  container: { title: "Container", type: ControlType.Boolean },
  direction: {
    title: "Direction",
    options: ["column", "column-reverse", "row", "row-reverse"],
    optionTitles: ["Column", "Column-reverse", "Row", "Row-reverse"],
    type: ControlType.Enum
  },
  item: { title: "Item", type: ControlType.Boolean },
  justify: {
    title: "Justify",
    options: [
      "space-around",
      "space-between",
      "space-evenly",
      "center",
      "flex-end",
      "flex-start"
    ],
    optionTitles: [
      "Space-around",
      "Space-between",
      "Space-evenly",
      "Center",
      "Flex-end",
      "Flex-start"
    ],
    type: ControlType.Enum
  },
  spacing: { title: "Spacing", type: ControlType.Number },
  wrap: {
    title: "Wrap",
    options: ["nowrap", "wrap", "wrap-reverse"],
    optionTitles: ["Nowrap", "Wrap", "Wrap-reverse"],
    type: ControlType.Enum
  },
  zeroMinWidth: { title: "ZeroMinWidth", type: ControlType.Boolean }
});
