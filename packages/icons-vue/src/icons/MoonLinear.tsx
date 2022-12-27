// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoonLinearSvg from '@ant-design/icons-svg/lib/asn/MoonLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoonLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoonLinear: MoonLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonLinearSvg}></AntdIcon>;
};

MoonLinear.displayName = 'MoonLinear';
MoonLinear.inheritAttrs = false;
export default MoonLinear;