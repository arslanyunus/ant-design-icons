// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleRightLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleRightLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleRightLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleRightLinear: ArrowCircleRightLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleRightLinearSvg}></AntdIcon>;
};

ArrowCircleRightLinear.displayName = 'ArrowCircleRightLinear';
ArrowCircleRightLinear.inheritAttrs = false;
export default ArrowCircleRightLinear;