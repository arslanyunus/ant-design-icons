// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StickynoteBoldSvg from '@ant-design/icons-svg/lib/asn/StickynoteBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StickynoteBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StickynoteBold: StickynoteBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickynoteBoldSvg}></AntdIcon>;
};

StickynoteBold.displayName = 'StickynoteBold';
StickynoteBold.inheritAttrs = false;
export default StickynoteBold;