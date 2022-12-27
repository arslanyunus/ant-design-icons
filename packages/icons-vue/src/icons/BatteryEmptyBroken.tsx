// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryEmptyBrokenSvg from '@ant-design/icons-svg/lib/asn/BatteryEmptyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryEmptyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryEmptyBroken: BatteryEmptyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryEmptyBrokenSvg}></AntdIcon>;
};

BatteryEmptyBroken.displayName = 'BatteryEmptyBroken';
BatteryEmptyBroken.inheritAttrs = false;
export default BatteryEmptyBroken;