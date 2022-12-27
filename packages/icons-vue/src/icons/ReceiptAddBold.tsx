// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptAddBoldSvg from '@ant-design/icons-svg/lib/asn/ReceiptAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptAddBold: ReceiptAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptAddBoldSvg}></AntdIcon>;
};

ReceiptAddBold.displayName = 'ReceiptAddBold';
ReceiptAddBold.inheritAttrs = false;
export default ReceiptAddBold;