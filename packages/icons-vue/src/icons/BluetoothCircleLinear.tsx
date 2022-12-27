// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothCircleLinearSvg from '@ant-design/icons-svg/lib/asn/BluetoothCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothCircleLinear: BluetoothCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothCircleLinearSvg}></AntdIcon>;
};

BluetoothCircleLinear.displayName = 'BluetoothCircleLinear';
BluetoothCircleLinear.inheritAttrs = false;
export default BluetoothCircleLinear;