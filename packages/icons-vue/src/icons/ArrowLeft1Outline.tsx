// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft1OutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft1Outline: ArrowLeft1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft1OutlineSvg}></AntdIcon>;
};

ArrowLeft1Outline.displayName = 'ArrowLeft1Outline';
ArrowLeft1Outline.inheritAttrs = false;
export default ArrowLeft1Outline;