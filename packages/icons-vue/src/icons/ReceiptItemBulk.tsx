// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptItemBulkSvg from '@ant-design/icons-svg/lib/asn/ReceiptItemBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptItemBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptItemBulk: ReceiptItemBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptItemBulkSvg}></AntdIcon>;
};

ReceiptItemBulk.displayName = 'ReceiptItemBulk';
ReceiptItemBulk.inheritAttrs = false;
export default ReceiptItemBulk;