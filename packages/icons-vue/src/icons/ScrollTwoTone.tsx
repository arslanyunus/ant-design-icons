// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScrollTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScrollTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScrollTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScrollTwoTone: ScrollTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScrollTwoToneSvg}></AntdIcon>;
};

ScrollTwoTone.displayName = 'ScrollTwoTone';
ScrollTwoTone.inheritAttrs = false;
export default ScrollTwoTone;