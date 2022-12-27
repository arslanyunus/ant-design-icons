// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryDisableBoldSvg from '@ant-design/icons-svg/lib/asn/BatteryDisableBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryDisableBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryDisableBold: BatteryDisableBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryDisableBoldSvg}></AntdIcon>;
};

BatteryDisableBold.displayName = 'BatteryDisableBold';
BatteryDisableBold.inheritAttrs = false;
export default BatteryDisableBold;