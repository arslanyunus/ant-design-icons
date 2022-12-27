// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlassBoldSvg from '@ant-design/icons-svg/lib/asn/GlassBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlassBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlassBold: GlassBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlassBoldSvg}></AntdIcon>;
};

GlassBold.displayName = 'GlassBold';
GlassBold.inheritAttrs = false;
export default GlassBold;