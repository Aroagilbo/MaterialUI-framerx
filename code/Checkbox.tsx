import * as React from "react"
import {
    Stack,
    StackProperties,
    addPropertyControls,
    ControlType,
} from "framer"
import {
    default as MuiCheckbox,
    CheckboxProps,
    //@ts-ignore
} from "@material-ui/core/Checkbox"

type Props = Partial<StackProperties> &
    CheckboxProps & {
        color: any
        size: any
        variant: any
    }

//Create component and return it
export function Checkbox(props: Props) {
    const { checked, color, disabled, onChange, disableRipple, ...rest } = props

    const [state, setState] = React.useState({ checked })

    React.useEffect(() => {
        setState({ checked })
    }, [checked])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event)
        setState({ ...state, checked: event.target.checked })
    }

    return (
        <Stack
            {...rest}
            alignment="center"
            distribution="center"
            overflow="visible"
        >
            <MuiCheckbox
                {...{
                    color,
                    disabled,
                    onChange,
                    disableRipple,
                }}
                checked={state.checked}
                onChange={handleChange}
                inputProps={{
                    "aria-label": "primary Checkbox",
                }}
            />
        </Stack>
    )
}

//Define default props
Checkbox.defaultProps = {
    width: 42,
    height: 42,
    color: "primary",
    disabled: false,
    checked: false,
    disableRipple: false,
    readOnly: false,
    value: "checked",
}

//Create property controls to expose properties in the canvas
addPropertyControls(Checkbox, {
    checked: {
        type: ControlType.Boolean,
        title: "Checked",
        enabledTitle: "True",
        disabledTitle: "False",
    },
    color: {
        type: ControlType.Enum,
        title: "Color",
        options: ["primary", "secondary", "default"],
        optionTitles: ["Primary", "Secondary", "Default"],
        defaultValue: "primary",
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
