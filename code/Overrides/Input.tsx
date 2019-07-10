import * as React from "react"
import { Data, Override } from "framer"

const data = Data({
    text: "",
})

//We want to change the get the value of the type from the select component and store it in the override.
export function GetText(): Override {
    // console.log("lalalal")
    return {
        value: data.text,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            data.text = event.target.value
        },
    }
}

//We want the value that we just stored in the data object to be reflected in the text field.
export function ChangeText(): Override {
    return {
        text: data.text,
    }
}
