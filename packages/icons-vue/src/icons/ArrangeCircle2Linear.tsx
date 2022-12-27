// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeCircle2LinearSvg from '@ant-design/icons-svg/lib/asn/ArrangeCircle2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeCircle2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeCircle2Linear: ArrangeCircle2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeCircle2LinearSvg}></AntdIcon>;
};

ArrangeCircle2Linear.displayName = 'ArrangeCircle2Linear';
ArrangeCircle2Linear.inheritAttrs = false;
export default ArrangeCircle2Linear;