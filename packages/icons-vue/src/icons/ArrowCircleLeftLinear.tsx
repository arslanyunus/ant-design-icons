// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleLeftLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleLeftLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleLeftLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleLeftLinear: ArrowCircleLeftLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleLeftLinearSvg}></AntdIcon>;
};

ArrowCircleLeftLinear.displayName = 'ArrowCircleLeftLinear';
ArrowCircleLeftLinear.inheritAttrs = false;
export default ArrowCircleLeftLinear;