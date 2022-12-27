// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryChargingBrokenSvg from '@ant-design/icons-svg/lib/asn/BatteryChargingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryChargingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryChargingBroken: BatteryChargingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryChargingBrokenSvg}></AntdIcon>;
};

BatteryChargingBroken.displayName = 'BatteryChargingBroken';
BatteryChargingBroken.inheritAttrs = false;
export default BatteryChargingBroken;