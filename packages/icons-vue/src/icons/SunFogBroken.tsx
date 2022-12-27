// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SunFogBrokenSvg from '@ant-design/icons-svg/lib/asn/SunFogBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SunFogBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SunFogBroken: SunFogBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunFogBrokenSvg}></AntdIcon>;
};

SunFogBroken.displayName = 'SunFogBroken';
SunFogBroken.inheritAttrs = false;
export default SunFogBroken;