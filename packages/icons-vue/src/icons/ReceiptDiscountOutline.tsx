// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptDiscountOutlineSvg from '@ant-design/icons-svg/lib/asn/ReceiptDiscountOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptDiscountOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptDiscountOutline: ReceiptDiscountOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptDiscountOutlineSvg}></AntdIcon>;
};

ReceiptDiscountOutline.displayName = 'ReceiptDiscountOutline';
ReceiptDiscountOutline.inheritAttrs = false;
export default ReceiptDiscountOutline;