// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptMinusBulkSvg from '@ant-design/icons-svg/lib/asn/ReceiptMinusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptMinusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptMinusBulk: ReceiptMinusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptMinusBulkSvg}></AntdIcon>;
};

ReceiptMinusBulk.displayName = 'ReceiptMinusBulk';
ReceiptMinusBulk.inheritAttrs = false;
export default ReceiptMinusBulk;