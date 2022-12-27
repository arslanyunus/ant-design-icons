// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlassBrokenSvg from '@ant-design/icons-svg/lib/asn/GlassBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlassBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlassBroken: GlassBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlassBrokenSvg}></AntdIcon>;
};

GlassBroken.displayName = 'GlassBroken';
GlassBroken.inheritAttrs = false;
export default GlassBroken;