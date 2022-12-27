// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp2OutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowUp2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp2Outline: ArrowUp2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp2OutlineSvg}></AntdIcon>;
};

ArrowUp2Outline.displayName = 'ArrowUp2Outline';
ArrowUp2Outline.inheritAttrs = false;
export default ArrowUp2Outline;