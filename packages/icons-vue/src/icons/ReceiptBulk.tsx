// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptBulkSvg from '@ant-design/icons-svg/lib/asn/ReceiptBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptBulk: ReceiptBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptBulkSvg}></AntdIcon>;
};

ReceiptBulk.displayName = 'ReceiptBulk';
ReceiptBulk.inheritAttrs = false;
export default ReceiptBulk;