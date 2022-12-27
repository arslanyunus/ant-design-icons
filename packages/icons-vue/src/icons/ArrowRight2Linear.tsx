// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight2LinearSvg from '@ant-design/icons-svg/lib/asn/ArrowRight2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight2Linear: ArrowRight2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight2LinearSvg}></AntdIcon>;
};

ArrowRight2Linear.displayName = 'ArrowRight2Linear';
ArrowRight2Linear.inheritAttrs = false;
export default ArrowRight2Linear;