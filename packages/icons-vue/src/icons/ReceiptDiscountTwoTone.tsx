// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptDiscountTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReceiptDiscountTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptDiscountTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptDiscountTwoTone: ReceiptDiscountTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptDiscountTwoToneSvg}></AntdIcon>;
};

ReceiptDiscountTwoTone.displayName = 'ReceiptDiscountTwoTone';
ReceiptDiscountTwoTone.inheritAttrs = false;
export default ReceiptDiscountTwoTone;