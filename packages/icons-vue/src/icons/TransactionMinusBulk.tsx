// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TransactionMinusBulkSvg from '@ant-design/icons-svg/lib/asn/TransactionMinusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TransactionMinusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TransactionMinusBulk: TransactionMinusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TransactionMinusBulkSvg}></AntdIcon>;
};

TransactionMinusBulk.displayName = 'TransactionMinusBulk';
TransactionMinusBulk.inheritAttrs = false;
export default TransactionMinusBulk;