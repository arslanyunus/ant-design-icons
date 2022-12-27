// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft2OutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft2Outline: ArrowLeft2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft2OutlineSvg}></AntdIcon>;
};

ArrowLeft2Outline.displayName = 'ArrowLeft2Outline';
ArrowLeft2Outline.inheritAttrs = false;
export default ArrowLeft2Outline;