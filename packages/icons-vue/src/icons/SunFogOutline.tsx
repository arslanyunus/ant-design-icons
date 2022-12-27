// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SunFogOutlineSvg from '@ant-design/icons-svg/lib/asn/SunFogOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SunFogOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SunFogOutline: SunFogOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunFogOutlineSvg}></AntdIcon>;
};

SunFogOutline.displayName = 'SunFogOutline';
SunFogOutline.inheritAttrs = false;
export default SunFogOutline;