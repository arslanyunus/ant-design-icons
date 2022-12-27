// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlassOutlineSvg from '@ant-design/icons-svg/lib/asn/GlassOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlassOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlassOutline: GlassOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlassOutlineSvg}></AntdIcon>;
};

GlassOutline.displayName = 'GlassOutline';
GlassOutline.inheritAttrs = false;
export default GlassOutline;