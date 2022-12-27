// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlassLinearSvg from '@ant-design/icons-svg/lib/asn/GlassLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlassLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlassLinear: GlassLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlassLinearSvg}></AntdIcon>;
};

GlassLinear.displayName = 'GlassLinear';
GlassLinear.inheritAttrs = false;
export default GlassLinear;