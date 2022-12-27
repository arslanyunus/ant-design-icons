// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StickynoteBrokenSvg from '@ant-design/icons-svg/lib/asn/StickynoteBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StickynoteBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StickynoteBroken: StickynoteBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickynoteBrokenSvg}></AntdIcon>;
};

StickynoteBroken.displayName = 'StickynoteBroken';
StickynoteBroken.inheritAttrs = false;
export default StickynoteBroken;