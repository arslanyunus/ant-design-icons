// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SunFogBoldSvg from '@ant-design/icons-svg/lib/asn/SunFogBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SunFogBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SunFogBold: SunFogBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunFogBoldSvg}></AntdIcon>;
};

SunFogBold.displayName = 'SunFogBold';
SunFogBold.inheritAttrs = false;
export default SunFogBold;