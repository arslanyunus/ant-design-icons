// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryDisableBulkSvg from '@ant-design/icons-svg/lib/asn/BatteryDisableBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryDisableBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryDisableBulk: BatteryDisableBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryDisableBulkSvg}></AntdIcon>;
};

BatteryDisableBulk.displayName = 'BatteryDisableBulk';
BatteryDisableBulk.inheritAttrs = false;
export default BatteryDisableBulk;