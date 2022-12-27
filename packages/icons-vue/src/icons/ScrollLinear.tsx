// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScrollLinearSvg from '@ant-design/icons-svg/lib/asn/ScrollLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScrollLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScrollLinear: ScrollLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScrollLinearSvg}></AntdIcon>;
};

ScrollLinear.displayName = 'ScrollLinear';
ScrollLinear.inheritAttrs = false;
export default ScrollLinear;