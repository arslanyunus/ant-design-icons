// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StickynoteTwoToneSvg from '@ant-design/icons-svg/lib/asn/StickynoteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StickynoteTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StickynoteTwoTone: StickynoteTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickynoteTwoToneSvg}></AntdIcon>;
};

StickynoteTwoTone.displayName = 'StickynoteTwoTone';
StickynoteTwoTone.inheritAttrs = false;
export default StickynoteTwoTone;