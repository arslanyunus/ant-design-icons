// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptEditBoldSvg from '@ant-design/icons-svg/lib/asn/ReceiptEditBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptEditBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptEditBold: ReceiptEditBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptEditBoldSvg}></AntdIcon>;
};

ReceiptEditBold.displayName = 'ReceiptEditBold';
ReceiptEditBold.inheritAttrs = false;
export default ReceiptEditBold;