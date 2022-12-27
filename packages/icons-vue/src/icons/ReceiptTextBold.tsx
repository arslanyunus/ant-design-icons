// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptTextBoldSvg from '@ant-design/icons-svg/lib/asn/ReceiptTextBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptTextBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptTextBold: ReceiptTextBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptTextBoldSvg}></AntdIcon>;
};

ReceiptTextBold.displayName = 'ReceiptTextBold';
ReceiptTextBold.inheritAttrs = false;
export default ReceiptTextBold;