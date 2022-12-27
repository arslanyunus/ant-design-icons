// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TransactionMinusBoldSvg from '@ant-design/icons-svg/lib/asn/TransactionMinusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TransactionMinusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TransactionMinusBold: TransactionMinusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TransactionMinusBoldSvg}></AntdIcon>;
};

TransactionMinusBold.displayName = 'TransactionMinusBold';
TransactionMinusBold.inheritAttrs = false;
export default TransactionMinusBold;