// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/BluetoothCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothCircleTwoTone: BluetoothCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothCircleTwoToneSvg}></AntdIcon>;
};

BluetoothCircleTwoTone.displayName = 'BluetoothCircleTwoTone';
BluetoothCircleTwoTone.inheritAttrs = false;
export default BluetoothCircleTwoTone;