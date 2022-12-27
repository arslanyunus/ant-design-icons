// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptEditBulkSvg from '@ant-design/icons-svg/lib/asn/ReceiptEditBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptEditBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptEditBulk: ReceiptEditBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptEditBulkSvg}></AntdIcon>;
};

ReceiptEditBulk.displayName = 'ReceiptEditBulk';
ReceiptEditBulk.inheritAttrs = false;
export default ReceiptEditBulk;