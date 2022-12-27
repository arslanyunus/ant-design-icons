// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscountShapeLinearSvg from '@ant-design/icons-svg/lib/asn/DiscountShapeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscountShapeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscountShapeLinear: DiscountShapeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscountShapeLinearSvg}></AntdIcon>;
};

DiscountShapeLinear.displayName = 'DiscountShapeLinear';
DiscountShapeLinear.inheritAttrs = false;
export default DiscountShapeLinear;