// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryEmptyLinearSvg from '@ant-design/icons-svg/lib/asn/BatteryEmptyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryEmptyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryEmptyLinear: BatteryEmptyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryEmptyLinearSvg}></AntdIcon>;
};

BatteryEmptyLinear.displayName = 'BatteryEmptyLinear';
BatteryEmptyLinear.inheritAttrs = false;
export default BatteryEmptyLinear;