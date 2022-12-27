// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptEditLinearSvg from '@ant-design/icons-svg/lib/asn/ReceiptEditLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptEditLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptEditLinear: ReceiptEditLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptEditLinearSvg}></AntdIcon>;
};

ReceiptEditLinear.displayName = 'ReceiptEditLinear';
ReceiptEditLinear.inheritAttrs = false;
export default ReceiptEditLinear;