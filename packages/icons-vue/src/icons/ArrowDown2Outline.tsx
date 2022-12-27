// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDown2OutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowDown2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDown2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDown2Outline: ArrowDown2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDown2OutlineSvg}></AntdIcon>;
};

ArrowDown2Outline.displayName = 'ArrowDown2Outline';
ArrowDown2Outline.inheritAttrs = false;
export default ArrowDown2Outline;