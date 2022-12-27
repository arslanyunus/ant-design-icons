// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptMinusLinearSvg from '@ant-design/icons-svg/lib/asn/ReceiptMinusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptMinusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptMinusLinear: ReceiptMinusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptMinusLinearSvg}></AntdIcon>;
};

ReceiptMinusLinear.displayName = 'ReceiptMinusLinear';
ReceiptMinusLinear.inheritAttrs = false;
export default ReceiptMinusLinear;