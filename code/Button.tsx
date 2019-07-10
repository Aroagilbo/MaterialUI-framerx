import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
//@ts-ignore
import { default as MuiButton } from "@material-ui/core/Button"

//Create component and return it
export function Button(props) {
    return (
        <Frame
            width={props.width}
            height={props.height}
            style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                background: "transparent",
            }}
        >
            <MuiButton
                href={props.href}
                disabled={props.disabled}
                disableRipple={props.disableRipple}
                fullWidth={props.fullWidth}
                color={props.color}
                size={props.size}
                variant={props.variant}
            >
                {props.text}
            </MuiButton>
        </Frame>
    )
}

//Define default props
Button.defaultProps = {
    width: 97,
    height: 45,
    color: "primary",
    size: "large",
    variant: "contained",
    href: "",
    text: "Click",
    disabled: false,
    disableRipple: false,
    fullWidth: false,
}

//Create property controls to expose properties in the canvas
addPropertyControls(Button, {
    text: { type: ControlType.String, title: "Text" },
    href: { type: ControlType.String, title: "URL" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    disableRipple: { type: ControlType.Boolean, title: "Ripple" },
    fullWidth: { type: ControlType.Boolean, title: "Full Width" },
    color: {
        type: ControlType.Enum,
        title: "Color",
        options: ["primary", "secondary", "default"],
        optionTitles: ["Primary", "Secondary", "Default"],
    },
    size: {
        type: ControlType.Enum,
        title: "Size",
        options: ["small", "medium", "large"],
        optionTitles: ["Small", "Medium", "Large"],
    },
    variant: {
        type: ControlType.Enum,
        title: "Variant",
        options: ["contained", "fab", "flat", "outlined", "raised", "text"],
        optionTitles: [
            "Contained",
            "Fab",
            "Flat",
            "Outlined",
            "Raised",
            "Text",
        ],
    },
})
