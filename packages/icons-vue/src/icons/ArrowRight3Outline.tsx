// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight3OutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowRight3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight3Outline: ArrowRight3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight3OutlineSvg}></AntdIcon>;
};

ArrowRight3Outline.displayName = 'ArrowRight3Outline';
ArrowRight3Outline.inheritAttrs = false;
export default ArrowRight3Outline;