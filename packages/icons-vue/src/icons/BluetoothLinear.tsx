// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothLinearSvg from '@ant-design/icons-svg/lib/asn/BluetoothLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothLinear: BluetoothLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothLinearSvg}></AntdIcon>;
};

BluetoothLinear.displayName = 'BluetoothLinear';
BluetoothLinear.inheritAttrs = false;
export default BluetoothLinear;