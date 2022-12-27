// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClockLinearSvg from '@ant-design/icons-svg/lib/asn/ClockLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClockLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClockLinear: ClockLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClockLinearSvg}></AntdIcon>;
};

ClockLinear.displayName = 'ClockLinear';
ClockLinear.inheritAttrs = false;
export default ClockLinear;