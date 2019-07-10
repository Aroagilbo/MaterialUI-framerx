import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
//@ts-ignore
import { default as MuiTextField } from "@material-ui/core/TextField"

//Create component and return it
export function TextField(props) {
    console.log(props)
    const [state, setState] = React.useState({ value: "" })

    const handleChange = (name: string) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (props.onChange) props.onChange(event)
        setState({ ...state, [name]: event.target.value })
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
            <MuiTextField
                color="primary"
                label={props.label}
                type={props.type}
                fullWidth={props.fullWidth}
                defaultValue={props.defaultValue}
                onChange={handleChange("value")}
                multiline={props.multiline}
                required={props.required}
                disabled={props.disabled}
                margin={props.margin}
                error={props.error}
                value={state.value}
            >
                {props.text}
            </MuiTextField>
        </Frame>
    )
}

//Define default props
TextField.defaultProps = {
    value: "",
    width: 170,
    height: 60,
    defaultValue: "",
    disabled: false,
    error: false,
    fullWidth: false,
    label: "Awesome label",
    type: "text",
    margin: "normal",
    multiline: false,
    required: false,
}

//Create property controls to expose properties in the canvas
addPropertyControls(TextField, {
    defaultValue: { type: ControlType.String, title: "Default" },
    value: { type: ControlType.String, title: "Value" },
    label: { type: ControlType.String, title: "Label" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    multiline: { type: ControlType.Boolean, title: "Multiline" },
    required: { type: ControlType.Boolean, title: "Required" },
    error: { type: ControlType.Boolean, title: "Error" },
    fullWidth: { type: ControlType.Boolean, title: "Full Width" },
    margin: {
        type: ControlType.Enum,
        title: "Margin",
        options: ["none", "dense", "normal"],
    },
    type: {
        type: ControlType.Enum,
        title: "Type",
        options: ["text", "number", "password", "search"],
    },
})
