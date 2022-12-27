// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleDownLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleDownLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleDownLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleDownLinear: ArrowCircleDownLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleDownLinearSvg}></AntdIcon>;
};

ArrowCircleDownLinear.displayName = 'ArrowCircleDownLinear';
ArrowCircleDownLinear.inheritAttrs = false;
export default ArrowCircleDownLinear;