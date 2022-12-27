// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptMinusBoldSvg from '@ant-design/icons-svg/lib/asn/ReceiptMinusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptMinusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptMinusBold: ReceiptMinusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptMinusBoldSvg}></AntdIcon>;
};

ReceiptMinusBold.displayName = 'ReceiptMinusBold';
ReceiptMinusBold.inheritAttrs = false;
export default ReceiptMinusBold;