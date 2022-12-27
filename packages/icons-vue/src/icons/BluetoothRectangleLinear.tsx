// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothRectangleLinearSvg from '@ant-design/icons-svg/lib/asn/BluetoothRectangleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothRectangleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothRectangleLinear: BluetoothRectangleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothRectangleLinearSvg}></AntdIcon>;
};

BluetoothRectangleLinear.displayName = 'BluetoothRectangleLinear';
BluetoothRectangleLinear.inheritAttrs = false;
export default BluetoothRectangleLinear;