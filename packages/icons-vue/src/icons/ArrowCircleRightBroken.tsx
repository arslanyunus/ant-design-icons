// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleRightBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleRightBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleRightBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleRightBroken: ArrowCircleRightBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleRightBrokenSvg}></AntdIcon>;
};

ArrowCircleRightBroken.displayName = 'ArrowCircleRightBroken';
ArrowCircleRightBroken.inheritAttrs = false;
export default ArrowCircleRightBroken;