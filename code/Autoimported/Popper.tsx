import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Popper: React.SFC = props => {
  return <System.Popper {...props} style={style} />;
};

Popper.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Popper, {
  disablePortal: { title: "DisablePortal", type: ControlType.Boolean },
  keepMounted: { title: "KeepMounted", type: ControlType.Boolean },
  open: { title: "Open", type: ControlType.Boolean },
  placement: {
    title: "Placement",
    options: [
      "bottom",
      "left",
      "right",
      "top",
      "bottom-end",
      "bottom-start",
      "left-end",
      "left-start",
      "right-end",
      "right-start",
      "top-end",
      "top-start"
    ],
    optionTitles: [
      "Bottom",
      "Left",
      "Right",
      "Top",
      "Bottom-end",
      "Bottom-start",
      "Left-end",
      "Left-start",
      "Right-end",
      "Right-start",
      "Top-end",
      "Top-start"
    ],
    type: ControlType.Enum
  },
  transition: { title: "Transition", type: ControlType.Boolean },
  defaultChecked: { title: "DefaultChecked", type: ControlType.Boolean },
  suppressContentEditableWarning: {
    title: "SuppressContentEditableWarning",
    type: ControlType.Boolean
  },
  suppressHydrationWarning: {
    title: "SuppressHydrationWarning",
    type: ControlType.Boolean
  },
  accessKey: { title: "AccessKey", type: ControlType.String },
  className: { title: "ClassName", type: ControlType.String },
  contentEditable: { title: "ContentEditable", type: ControlType.Boolean },
  contextMenu: { title: "ContextMenu", type: ControlType.String },
  dir: { title: "Dir", type: ControlType.String },
  draggable: { title: "Draggable", type: ControlType.Boolean },
  hidden: { title: "Hidden", type: ControlType.Boolean },
  id: { title: "Id", type: ControlType.String },
  lang: { title: "Lang", type: ControlType.String },
  placeholder: { title: "Placeholder", type: ControlType.String },
  slot: { title: "Slot", type: ControlType.String },
  spellCheck: { title: "SpellCheck", type: ControlType.Boolean },
  tabIndex: { title: "TabIndex", type: ControlType.Number },
  title: { title: "Title", type: ControlType.String },
  inputMode: { title: "InputMode", type: ControlType.String },
  is: { title: "Is", type: ControlType.String },
  radioGroup: { title: "RadioGroup", type: ControlType.String },
  role: { title: "Role", type: ControlType.String },
  about: { title: "About", type: ControlType.String },
  datatype: { title: "Datatype", type: ControlType.String },
  prefix: { title: "Prefix", type: ControlType.String },
  property: { title: "Property", type: ControlType.String },
  resource: { title: "Resource", type: ControlType.String },
  typeof: { title: "Typeof", type: ControlType.String },
  vocab: { title: "Vocab", type: ControlType.String },
  autoCapitalize: { title: "AutoCapitalize", type: ControlType.String },
  autoCorrect: { title: "AutoCorrect", type: ControlType.String },
  autoSave: { title: "AutoSave", type: ControlType.String },
  color: { title: "Color", type: ControlType.String },
  itemProp: { title: "ItemProp", type: ControlType.String },
  itemScope: { title: "ItemScope", type: ControlType.Boolean },
  itemType: { title: "ItemType", type: ControlType.String },
  itemID: { title: "ItemID", type: ControlType.String },
  itemRef: { title: "ItemRef", type: ControlType.String },
  results: { title: "Results", type: ControlType.Number },
  security: { title: "Security", type: ControlType.String },
  unselectable: {
    title: "Unselectable",
    options: ["on", "off"],
    optionTitles: ["On", "Off"],
    type: ControlType.Enum
  }
});
