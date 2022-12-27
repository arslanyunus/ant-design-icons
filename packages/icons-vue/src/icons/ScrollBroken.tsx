// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScrollBrokenSvg from '@ant-design/icons-svg/lib/asn/ScrollBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScrollBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScrollBroken: ScrollBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScrollBrokenSvg}></AntdIcon>;
};

ScrollBroken.displayName = 'ScrollBroken';
ScrollBroken.inheritAttrs = false;
export default ScrollBroken;