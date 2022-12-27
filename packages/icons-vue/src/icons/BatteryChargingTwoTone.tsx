// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryChargingTwoToneSvg from '@ant-design/icons-svg/lib/asn/BatteryChargingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryChargingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryChargingTwoTone: BatteryChargingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryChargingTwoToneSvg}></AntdIcon>;
};

BatteryChargingTwoTone.displayName = 'BatteryChargingTwoTone';
BatteryChargingTwoTone.inheritAttrs = false;
export default BatteryChargingTwoTone;