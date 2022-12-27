// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothRectangleBulkSvg from '@ant-design/icons-svg/lib/asn/BluetoothRectangleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothRectangleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothRectangleBulk: BluetoothRectangleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothRectangleBulkSvg}></AntdIcon>;
};

BluetoothRectangleBulk.displayName = 'BluetoothRectangleBulk';
BluetoothRectangleBulk.inheritAttrs = false;
export default BluetoothRectangleBulk;