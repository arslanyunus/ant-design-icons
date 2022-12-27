// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft3OutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft3Outline: ArrowLeft3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft3OutlineSvg}></AntdIcon>;
};

ArrowLeft3Outline.displayName = 'ArrowLeft3Outline';
ArrowLeft3Outline.inheritAttrs = false;
export default ArrowLeft3Outline;