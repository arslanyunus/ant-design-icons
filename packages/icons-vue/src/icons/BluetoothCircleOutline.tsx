// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/BluetoothCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothCircleOutline: BluetoothCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothCircleOutlineSvg}></AntdIcon>;
};

BluetoothCircleOutline.displayName = 'BluetoothCircleOutline';
BluetoothCircleOutline.inheritAttrs = false;
export default BluetoothCircleOutline;