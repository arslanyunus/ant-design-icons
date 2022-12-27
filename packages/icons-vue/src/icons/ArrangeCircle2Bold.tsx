// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeCircle2BoldSvg from '@ant-design/icons-svg/lib/asn/ArrangeCircle2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeCircle2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeCircle2Bold: ArrangeCircle2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeCircle2BoldSvg}></AntdIcon>;
};

ArrangeCircle2Bold.displayName = 'ArrangeCircle2Bold';
ArrangeCircle2Bold.inheritAttrs = false;
export default ArrangeCircle2Bold;