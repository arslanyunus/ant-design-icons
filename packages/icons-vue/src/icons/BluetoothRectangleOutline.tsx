// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothRectangleOutlineSvg from '@ant-design/icons-svg/lib/asn/BluetoothRectangleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothRectangleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothRectangleOutline: BluetoothRectangleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothRectangleOutlineSvg}></AntdIcon>;
};

BluetoothRectangleOutline.displayName = 'BluetoothRectangleOutline';
BluetoothRectangleOutline.inheritAttrs = false;
export default BluetoothRectangleOutline;