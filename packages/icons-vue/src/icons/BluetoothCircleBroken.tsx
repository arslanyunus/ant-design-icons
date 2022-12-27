// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/BluetoothCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothCircleBroken: BluetoothCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothCircleBrokenSvg}></AntdIcon>;
};

BluetoothCircleBroken.displayName = 'BluetoothCircleBroken';
BluetoothCircleBroken.inheritAttrs = false;
export default BluetoothCircleBroken;