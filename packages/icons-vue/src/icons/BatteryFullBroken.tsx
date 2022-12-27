// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryFullBrokenSvg from '@ant-design/icons-svg/lib/asn/BatteryFullBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryFullBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryFullBroken: BatteryFullBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryFullBrokenSvg}></AntdIcon>;
};

BatteryFullBroken.displayName = 'BatteryFullBroken';
BatteryFullBroken.inheritAttrs = false;
export default BatteryFullBroken;