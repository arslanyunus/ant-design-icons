// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeCircle2BrokenSvg from '@ant-design/icons-svg/lib/asn/ArrangeCircle2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeCircle2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeCircle2Broken: ArrangeCircle2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeCircle2BrokenSvg}></AntdIcon>;
};

ArrangeCircle2Broken.displayName = 'ArrangeCircle2Broken';
ArrangeCircle2Broken.inheritAttrs = false;
export default ArrangeCircle2Broken;