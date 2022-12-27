// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDown1OutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowDown1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDown1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDown1Outline: ArrowDown1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDown1OutlineSvg}></AntdIcon>;
};

ArrowDown1Outline.displayName = 'ArrowDown1Outline';
ArrowDown1Outline.inheritAttrs = false;
export default ArrowDown1Outline;