// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryChargingBoldSvg from '@ant-design/icons-svg/lib/asn/BatteryChargingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryChargingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryChargingBold: BatteryChargingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryChargingBoldSvg}></AntdIcon>;
};

BatteryChargingBold.displayName = 'BatteryChargingBold';
BatteryChargingBold.inheritAttrs = false;
export default BatteryChargingBold;