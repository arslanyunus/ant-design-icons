// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SunLinearSvg from '@ant-design/icons-svg/lib/asn/SunLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SunLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SunLinear: SunLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunLinearSvg}></AntdIcon>;
};

SunLinear.displayName = 'SunLinear';
SunLinear.inheritAttrs = false;
export default SunLinear;