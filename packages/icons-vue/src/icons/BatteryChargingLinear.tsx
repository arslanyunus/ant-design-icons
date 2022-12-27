// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryChargingLinearSvg from '@ant-design/icons-svg/lib/asn/BatteryChargingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryChargingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryChargingLinear: BatteryChargingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryChargingLinearSvg}></AntdIcon>;
};

BatteryChargingLinear.displayName = 'BatteryChargingLinear';
BatteryChargingLinear.inheritAttrs = false;
export default BatteryChargingLinear;