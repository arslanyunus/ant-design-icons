// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptDiscountBrokenSvg from '@ant-design/icons-svg/lib/asn/ReceiptDiscountBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptDiscountBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptDiscountBroken: ReceiptDiscountBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptDiscountBrokenSvg}></AntdIcon>;
};

ReceiptDiscountBroken.displayName = 'ReceiptDiscountBroken';
ReceiptDiscountBroken.inheritAttrs = false;
export default ReceiptDiscountBroken;