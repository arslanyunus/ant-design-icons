// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptBoldSvg from '@ant-design/icons-svg/lib/asn/ReceiptBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptBold: ReceiptBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptBoldSvg}></AntdIcon>;
};

ReceiptBold.displayName = 'ReceiptBold';
ReceiptBold.inheritAttrs = false;
export default ReceiptBold;