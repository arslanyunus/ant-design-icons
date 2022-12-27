// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptSearchLinearSvg from '@ant-design/icons-svg/lib/asn/ReceiptSearchLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptSearchLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptSearchLinear: ReceiptSearchLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptSearchLinearSvg}></AntdIcon>;
};

ReceiptSearchLinear.displayName = 'ReceiptSearchLinear';
ReceiptSearchLinear.inheritAttrs = false;
export default ReceiptSearchLinear;