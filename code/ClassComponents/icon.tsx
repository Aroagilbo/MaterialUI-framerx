import * as React from "react"
import { ControlType } from "framer"
//@ts-ignore
import styled, { injectGlobal } from "styled-components"

injectGlobal`
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
`

interface MaterialIconProps {
    icon: string
    color: string
    stretch: boolean
    height: number
}

export class MaterialIcon extends React.Component<MaterialIconProps> {
    static defaultProps = {
        icon: "favorite",
        color: "#6200ee",
        stretch: false,
        width: 24,
        height: 24,
    }

    static propertyControls = {
        icon: { type: ControlType.String, title: "Icon name" },
        color: { type: ControlType.Color, title: "Color" },
        stretch: { type: ControlType.Boolean, title: "Stretch" },
    }

    render() {
        return (
            <StyledIconFrame
                height={this.props.height}
                stretch={this.props.stretch}
            >
                <i
                    className="material-icons mdc-button__icon"
                    aria-hidden="true"
                    style={{ color: this.props.color }}
                >
                    {this.props.icon}
                </i>
            </StyledIconFrame>
        )
    }
}

/*
 ** STYLED FRAME FOR WRAPPER COMPONENT
 ** This maintains centering the icon within the parent Frame on the canvas.
 */

interface iconProps {
    stretch: boolean
    height: number
}

const StyledIconFrame = styled<iconProps, any>("div")`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  i {
    font-size: ${props => (props.stretch ? props.height : 24)}px !important;
  }
`
