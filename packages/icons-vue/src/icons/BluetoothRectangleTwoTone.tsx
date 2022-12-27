// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothRectangleTwoToneSvg from '@ant-design/icons-svg/lib/asn/BluetoothRectangleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothRectangleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothRectangleTwoTone: BluetoothRectangleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothRectangleTwoToneSvg}></AntdIcon>;
};

BluetoothRectangleTwoTone.displayName = 'BluetoothRectangleTwoTone';
BluetoothRectangleTwoTone.inheritAttrs = false;
export default BluetoothRectangleTwoTone;