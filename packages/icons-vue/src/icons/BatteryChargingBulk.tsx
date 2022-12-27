// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryChargingBulkSvg from '@ant-design/icons-svg/lib/asn/BatteryChargingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryChargingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryChargingBulk: BatteryChargingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryChargingBulkSvg}></AntdIcon>;
};

BatteryChargingBulk.displayName = 'BatteryChargingBulk';
BatteryChargingBulk.inheritAttrs = false;
export default BatteryChargingBulk;