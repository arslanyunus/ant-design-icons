// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothCircleBoldSvg from '@ant-design/icons-svg/lib/asn/BluetoothCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothCircleBold: BluetoothCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothCircleBoldSvg}></AntdIcon>;
};

BluetoothCircleBold.displayName = 'BluetoothCircleBold';
BluetoothCircleBold.inheritAttrs = false;
export default BluetoothCircleBold;