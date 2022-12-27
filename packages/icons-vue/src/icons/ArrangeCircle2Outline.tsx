// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeCircle2OutlineSvg from '@ant-design/icons-svg/lib/asn/ArrangeCircle2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeCircle2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeCircle2Outline: ArrangeCircle2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeCircle2OutlineSvg}></AntdIcon>;
};

ArrangeCircle2Outline.displayName = 'ArrangeCircle2Outline';
ArrangeCircle2Outline.inheritAttrs = false;
export default ArrangeCircle2Outline;