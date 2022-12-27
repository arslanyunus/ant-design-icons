// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryDisableLinearSvg from '@ant-design/icons-svg/lib/asn/BatteryDisableLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryDisableLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryDisableLinear: BatteryDisableLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryDisableLinearSvg}></AntdIcon>;
};

BatteryDisableLinear.displayName = 'BatteryDisableLinear';
BatteryDisableLinear.inheritAttrs = false;
export default BatteryDisableLinear;