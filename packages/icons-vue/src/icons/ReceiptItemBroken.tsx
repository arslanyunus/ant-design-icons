// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptItemBrokenSvg from '@ant-design/icons-svg/lib/asn/ReceiptItemBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptItemBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptItemBroken: ReceiptItemBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptItemBrokenSvg}></AntdIcon>;
};

ReceiptItemBroken.displayName = 'ReceiptItemBroken';
ReceiptItemBroken.inheritAttrs = false;
export default ReceiptItemBroken;