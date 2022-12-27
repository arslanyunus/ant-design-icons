// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothRectangleBoldSvg from '@ant-design/icons-svg/lib/asn/BluetoothRectangleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothRectangleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothRectangleBold: BluetoothRectangleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothRectangleBoldSvg}></AntdIcon>;
};

BluetoothRectangleBold.displayName = 'BluetoothRectangleBold';
BluetoothRectangleBold.inheritAttrs = false;
export default BluetoothRectangleBold;