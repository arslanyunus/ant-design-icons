// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothTwoToneSvg from '@ant-design/icons-svg/lib/asn/BluetoothTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothTwoTone: BluetoothTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothTwoToneSvg}></AntdIcon>;
};

BluetoothTwoTone.displayName = 'BluetoothTwoTone';
BluetoothTwoTone.inheritAttrs = false;
export default BluetoothTwoTone;