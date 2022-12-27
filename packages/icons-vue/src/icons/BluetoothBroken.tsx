// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothBrokenSvg from '@ant-design/icons-svg/lib/asn/BluetoothBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothBroken: BluetoothBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothBrokenSvg}></AntdIcon>;
};

BluetoothBroken.displayName = 'BluetoothBroken';
BluetoothBroken.inheritAttrs = false;
export default BluetoothBroken;