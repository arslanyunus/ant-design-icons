// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptTextBulkSvg from '@ant-design/icons-svg/lib/asn/ReceiptTextBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptTextBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptTextBulk: ReceiptTextBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptTextBulkSvg}></AntdIcon>;
};

ReceiptTextBulk.displayName = 'ReceiptTextBulk';
ReceiptTextBulk.inheritAttrs = false;
export default ReceiptTextBulk;