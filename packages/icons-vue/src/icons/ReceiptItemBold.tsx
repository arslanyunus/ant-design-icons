// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptItemBoldSvg from '@ant-design/icons-svg/lib/asn/ReceiptItemBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptItemBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptItemBold: ReceiptItemBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptItemBoldSvg}></AntdIcon>;
};

ReceiptItemBold.displayName = 'ReceiptItemBold';
ReceiptItemBold.inheritAttrs = false;
export default ReceiptItemBold;