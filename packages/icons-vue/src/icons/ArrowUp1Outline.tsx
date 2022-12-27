// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp1OutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowUp1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp1Outline: ArrowUp1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp1OutlineSvg}></AntdIcon>;
};

ArrowUp1Outline.displayName = 'ArrowUp1Outline';
ArrowUp1Outline.inheritAttrs = false;
export default ArrowUp1Outline;