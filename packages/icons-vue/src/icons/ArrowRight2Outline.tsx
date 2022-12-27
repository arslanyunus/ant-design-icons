// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight2OutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowRight2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight2Outline: ArrowRight2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight2OutlineSvg}></AntdIcon>;
};

ArrowRight2Outline.displayName = 'ArrowRight2Outline';
ArrowRight2Outline.inheritAttrs = false;
export default ArrowRight2Outline;