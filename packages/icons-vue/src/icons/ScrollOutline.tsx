// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScrollOutlineSvg from '@ant-design/icons-svg/lib/asn/ScrollOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScrollOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScrollOutline: ScrollOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScrollOutlineSvg}></AntdIcon>;
};

ScrollOutline.displayName = 'ScrollOutline';
ScrollOutline.inheritAttrs = false;
export default ScrollOutline;