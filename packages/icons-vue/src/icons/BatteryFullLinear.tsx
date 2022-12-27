// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryFullLinearSvg from '@ant-design/icons-svg/lib/asn/BatteryFullLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryFullLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryFullLinear: BatteryFullLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryFullLinearSvg}></AntdIcon>;
};

BatteryFullLinear.displayName = 'BatteryFullLinear';
BatteryFullLinear.inheritAttrs = false;
export default BatteryFullLinear;