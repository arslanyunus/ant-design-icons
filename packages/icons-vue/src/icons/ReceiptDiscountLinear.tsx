// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptDiscountLinearSvg from '@ant-design/icons-svg/lib/asn/ReceiptDiscountLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptDiscountLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptDiscountLinear: ReceiptDiscountLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptDiscountLinearSvg}></AntdIcon>;
};

ReceiptDiscountLinear.displayName = 'ReceiptDiscountLinear';
ReceiptDiscountLinear.inheritAttrs = false;
export default ReceiptDiscountLinear;