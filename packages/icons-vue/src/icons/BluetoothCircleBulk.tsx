// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BluetoothCircleBulkSvg from '@ant-design/icons-svg/lib/asn/BluetoothCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BluetoothCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BluetoothCircleBulk: BluetoothCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothCircleBulkSvg}></AntdIcon>;
};

BluetoothCircleBulk.displayName = 'BluetoothCircleBulk';
BluetoothCircleBulk.inheritAttrs = false;
export default BluetoothCircleBulk;