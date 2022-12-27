// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRightLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowRightLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRightLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRightLinear: ArrowRightLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRightLinearSvg}></AntdIcon>;
};

ArrowRightLinear.displayName = 'ArrowRightLinear';
ArrowRightLinear.inheritAttrs = false;
export default ArrowRightLinear;