// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptDisscountBulkSvg from '@ant-design/icons-svg/lib/asn/ReceiptDisscountBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptDisscountBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptDisscountBulk: ReceiptDisscountBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptDisscountBulkSvg}></AntdIcon>;
};

ReceiptDisscountBulk.displayName = 'ReceiptDisscountBulk';
ReceiptDisscountBulk.inheritAttrs = false;
export default ReceiptDisscountBulk;