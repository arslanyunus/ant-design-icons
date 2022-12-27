// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryFullBulkSvg from '@ant-design/icons-svg/lib/asn/BatteryFullBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryFullBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryFullBulk: BatteryFullBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryFullBulkSvg}></AntdIcon>;
};

BatteryFullBulk.displayName = 'BatteryFullBulk';
BatteryFullBulk.inheritAttrs = false;
export default BatteryFullBulk;