// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptDiscountBulkSvg from '@ant-design/icons-svg/lib/asn/ReceiptDiscountBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptDiscountBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptDiscountBulk: ReceiptDiscountBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptDiscountBulkSvg}></AntdIcon>;
};

ReceiptDiscountBulk.displayName = 'ReceiptDiscountBulk';
ReceiptDiscountBulk.inheritAttrs = false;
export default ReceiptDiscountBulk;