import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
//@ts-ignore
import { default as MuiSwitch } from "@material-ui/core/Switch"

//Create component and return it
export function Switch(props) {
    const [state, setState] = React.useState({ checked: false })

    const handleChange = (name: string) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (props.onChange) props.onChange(event)
        setState({ ...state, [name]: event.target.checked })
    }

    React.useEffect(() => {
        setState(props)
    }, [props])

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
            <MuiSwitch
                checked={state.checked}
                color={props.color}
                disabled={props.disabled}
                disableRipple={props.disableRipple}
                onChange={handleChange("checked")}
                value="checked"
                inputProps={{
                    "aria-label": "primary Switch",
                }}
            />
        </Frame>
    )
}

//Define default props
Switch.defaultProps = {
    width: 42,
    height: 42,
    color: "primary",
    disabled: false,
    checked: false,
    disableRipple: false,
    value: "checked",
}

//Create property controls to expose properties in the canvas
addPropertyControls(Switch, {
    text: { type: ControlType.String, title: "Text" },
    checked: {
        type: ControlType.Boolean,
        title: "Checked",
        defaultValue: false,
        enabledTitle: "True",
        disabledTitle: "False",
    },
    color: {
        type: ControlType.Enum,
        title: "Color",
        options: ["primary", "secondary", "default"],
        optionTitles: ["Primary", "Secondary", "Default"],
    },
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
        enabledTitle: "True",
        disabledTitle: "False",
    },
    disableRipple: {
        type: ControlType.Boolean,
        title: "Disable Ripple",
        enabledTitle: "True",
        disabledTitle: "False",
    },
})
