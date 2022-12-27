// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptSearchBoldSvg from '@ant-design/icons-svg/lib/asn/ReceiptSearchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptSearchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptSearchBold: ReceiptSearchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptSearchBoldSvg}></AntdIcon>;
};

ReceiptSearchBold.displayName = 'ReceiptSearchBold';
ReceiptSearchBold.inheritAttrs = false;
export default ReceiptSearchBold;