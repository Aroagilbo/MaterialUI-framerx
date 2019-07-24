import * as React from 'react';
import * as System from '../../design-system';
import { ControlType, PropertyControls } from 'framer';

type Props = System.HelloProps & {
  width: number;
  height: number;
};

export class Hello extends React.Component<Props> {
  render() {
    return <System.Hello {...this.props} />;
  }

  static defaultProps: Props = {
    width: 150,
    height: 50,
  };

  static propertyControls: PropertyControls<Props> = {
    name: { title: 'Name', type: ControlType.String },
  };
}
