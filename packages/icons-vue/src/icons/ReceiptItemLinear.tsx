// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptItemLinearSvg from '@ant-design/icons-svg/lib/asn/ReceiptItemLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptItemLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptItemLinear: ReceiptItemLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptItemLinearSvg}></AntdIcon>;
};

ReceiptItemLinear.displayName = 'ReceiptItemLinear';
ReceiptItemLinear.inheritAttrs = false;
export default ReceiptItemLinear;