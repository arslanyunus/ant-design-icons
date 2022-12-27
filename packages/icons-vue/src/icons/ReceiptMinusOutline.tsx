// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptMinusOutlineSvg from '@ant-design/icons-svg/lib/asn/ReceiptMinusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptMinusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptMinusOutline: ReceiptMinusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptMinusOutlineSvg}></AntdIcon>;
};

ReceiptMinusOutline.displayName = 'ReceiptMinusOutline';
ReceiptMinusOutline.inheritAttrs = false;
export default ReceiptMinusOutline;