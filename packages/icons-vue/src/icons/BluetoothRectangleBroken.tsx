// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothRectangleBrokenSvg from '@ant-design/icons-svg/lib/asn/BluetoothRectangleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothRectangleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothRectangleBroken: BluetoothRectangleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothRectangleBrokenSvg}></AntdIcon>;
};

BluetoothRectangleBroken.displayName = 'BluetoothRectangleBroken';
BluetoothRectangleBroken.inheritAttrs = false;
export default BluetoothRectangleBroken;