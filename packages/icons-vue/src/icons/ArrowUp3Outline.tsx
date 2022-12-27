// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp3OutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowUp3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp3Outline: ArrowUp3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp3OutlineSvg}></AntdIcon>;
};

ArrowUp3Outline.displayName = 'ArrowUp3Outline';
ArrowUp3Outline.inheritAttrs = false;
export default ArrowUp3Outline;