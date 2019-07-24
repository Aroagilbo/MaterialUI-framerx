import * as React from "react"
import {
    Stack,
    StackProperties,
    addPropertyControls,
    ControlType,
} from "framer"
//@ts-ignore
import { default as MuiButton, ButtonProps } from "@material-ui/core/Button"

type Props = Partial<StackProperties> &
    ButtonProps & {
        text: string
        color: any
        size: any
        variant: any
    }

//Create component and return it
export function Button(props: Props) {
    const {
        style,
        //
        href,
        disabled,
        disableRipple,
        fullWidth,
        color,
        size,
        variant,
        text,
        ...rest
    } = props

    return (
        <Stack
            {...rest}
            alignment="center"
            distribution="center"
            overflow="visible"
        >
            <MuiButton
                {...{
                    href,
                    disabled,
                    disableRipple,
                    fullWidth,
                    color,
                    size,
                    variant,
                }}
            >
                {text}
            </MuiButton>
        </Stack>
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
