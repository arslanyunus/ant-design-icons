// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptAddBulkSvg from '@ant-design/icons-svg/lib/asn/ReceiptAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptAddBulk: ReceiptAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptAddBulkSvg}></AntdIcon>;
};

ReceiptAddBulk.displayName = 'ReceiptAddBulk';
ReceiptAddBulk.inheritAttrs = false;
export default ReceiptAddBulk;