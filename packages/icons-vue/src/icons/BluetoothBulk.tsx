// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothBulkSvg from '@ant-design/icons-svg/lib/asn/BluetoothBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothBulk: BluetoothBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothBulkSvg}></AntdIcon>;
};

BluetoothBulk.displayName = 'BluetoothBulk';
BluetoothBulk.inheritAttrs = false;
export default BluetoothBulk;