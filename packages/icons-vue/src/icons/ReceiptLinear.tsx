// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptLinearSvg from '@ant-design/icons-svg/lib/asn/ReceiptLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptLinear: ReceiptLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptLinearSvg}></AntdIcon>;
};

ReceiptLinear.displayName = 'ReceiptLinear';
ReceiptLinear.inheritAttrs = false;
export default ReceiptLinear;