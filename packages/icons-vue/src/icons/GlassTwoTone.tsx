// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlassTwoToneSvg from '@ant-design/icons-svg/lib/asn/GlassTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlassTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlassTwoTone: GlassTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlassTwoToneSvg}></AntdIcon>;
};

GlassTwoTone.displayName = 'GlassTwoTone';
GlassTwoTone.inheritAttrs = false;
export default GlassTwoTone;