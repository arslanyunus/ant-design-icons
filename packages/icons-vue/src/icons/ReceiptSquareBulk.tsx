// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptSquareBulkSvg from '@ant-design/icons-svg/lib/asn/ReceiptSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptSquareBulk: ReceiptSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptSquareBulkSvg}></AntdIcon>;
};

ReceiptSquareBulk.displayName = 'ReceiptSquareBulk';
ReceiptSquareBulk.inheritAttrs = false;
export default ReceiptSquareBulk;