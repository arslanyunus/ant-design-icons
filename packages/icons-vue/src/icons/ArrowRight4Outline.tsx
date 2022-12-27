// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight4OutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowRight4Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight4OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight4Outline: ArrowRight4OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight4OutlineSvg}></AntdIcon>;
};

ArrowRight4Outline.displayName = 'ArrowRight4Outline';
ArrowRight4Outline.inheritAttrs = false;
export default ArrowRight4Outline;