// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscountCircleLinearSvg from '@ant-design/icons-svg/lib/asn/DiscountCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscountCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscountCircleLinear: DiscountCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscountCircleLinearSvg}></AntdIcon>;
};

DiscountCircleLinear.displayName = 'DiscountCircleLinear';
DiscountCircleLinear.inheritAttrs = false;
export default DiscountCircleLinear;