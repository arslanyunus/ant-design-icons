// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight1OutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowRight1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight1Outline: ArrowRight1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight1OutlineSvg}></AntdIcon>;
};

ArrowRight1Outline.displayName = 'ArrowRight1Outline';
ArrowRight1Outline.inheritAttrs = false;
export default ArrowRight1Outline;