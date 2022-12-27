// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothOutlineSvg from '@ant-design/icons-svg/lib/asn/BluetoothOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothOutline: BluetoothOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothOutlineSvg}></AntdIcon>;
};

BluetoothOutline.displayName = 'BluetoothOutline';
BluetoothOutline.inheritAttrs = false;
export default BluetoothOutline;