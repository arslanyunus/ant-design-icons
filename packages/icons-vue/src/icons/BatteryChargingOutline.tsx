// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryChargingOutlineSvg from '@ant-design/icons-svg/lib/asn/BatteryChargingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryChargingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryChargingOutline: BatteryChargingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryChargingOutlineSvg}></AntdIcon>;
};

BatteryChargingOutline.displayName = 'BatteryChargingOutline';
BatteryChargingOutline.inheritAttrs = false;
export default BatteryChargingOutline;