import * as React from "react"
import { Data, Override } from "framer"

const data = Data({
    checked: false,
})

//We want to change the get the value of the type from the select component and store it in the override.
export function GetChecked(): Override {
    // console.log("lalalal")
    return {
        checked: data.checked,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            // console.log("override", event.target.checked)
            data.checked = event.target.checked
        },
    }
}

//We want the value that we just stored in the data object to be reflected in the text field.
export function KeepChecked(): Override {
    return {
        checked: data.checked,
    }
}
