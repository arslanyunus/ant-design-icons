// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SpeedometerLinearSvg from '@ant-design/icons-svg/lib/asn/SpeedometerLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SpeedometerLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SpeedometerLinear: SpeedometerLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeedometerLinearSvg}></AntdIcon>;
};

SpeedometerLinear.displayName = 'SpeedometerLinear';
SpeedometerLinear.inheritAttrs = false;
export default SpeedometerLinear;