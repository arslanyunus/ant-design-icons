// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryEmptyBulkSvg from '@ant-design/icons-svg/lib/asn/BatteryEmptyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryEmptyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryEmptyBulk: BatteryEmptyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryEmptyBulkSvg}></AntdIcon>;
};

BatteryEmptyBulk.displayName = 'BatteryEmptyBulk';
BatteryEmptyBulk.inheritAttrs = false;
export default BatteryEmptyBulk;