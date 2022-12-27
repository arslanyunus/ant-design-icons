// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptSearchBulkSvg from '@ant-design/icons-svg/lib/asn/ReceiptSearchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptSearchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptSearchBulk: ReceiptSearchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptSearchBulkSvg}></AntdIcon>;
};

ReceiptSearchBulk.displayName = 'ReceiptSearchBulk';
ReceiptSearchBulk.inheritAttrs = false;
export default ReceiptSearchBulk;