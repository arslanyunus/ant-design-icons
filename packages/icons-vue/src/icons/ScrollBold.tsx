// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScrollBoldSvg from '@ant-design/icons-svg/lib/asn/ScrollBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScrollBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScrollBold: ScrollBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScrollBoldSvg}></AntdIcon>;
};

ScrollBold.displayName = 'ScrollBold';
ScrollBold.inheritAttrs = false;
export default ScrollBold;