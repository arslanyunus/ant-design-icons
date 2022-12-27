// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptDiscountBoldSvg from '@ant-design/icons-svg/lib/asn/ReceiptDiscountBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptDiscountBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptDiscountBold: ReceiptDiscountBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptDiscountBoldSvg}></AntdIcon>;
};

ReceiptDiscountBold.displayName = 'ReceiptDiscountBold';
ReceiptDiscountBold.inheritAttrs = false;
export default ReceiptDiscountBold;