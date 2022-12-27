// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothBoldSvg from '@ant-design/icons-svg/lib/asn/BluetoothBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothBold: BluetoothBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothBoldSvg}></AntdIcon>;
};

BluetoothBold.displayName = 'BluetoothBold';
BluetoothBold.inheritAttrs = false;
export default BluetoothBold;