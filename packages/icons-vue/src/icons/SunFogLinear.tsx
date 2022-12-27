// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SunFogLinearSvg from '@ant-design/icons-svg/lib/asn/SunFogLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SunFogLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SunFogLinear: SunFogLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunFogLinearSvg}></AntdIcon>;
};

SunFogLinear.displayName = 'SunFogLinear';
SunFogLinear.inheritAttrs = false;
export default SunFogLinear;