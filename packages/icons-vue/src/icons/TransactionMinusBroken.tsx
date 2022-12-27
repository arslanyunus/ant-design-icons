// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TransactionMinusBrokenSvg from '@ant-design/icons-svg/lib/asn/TransactionMinusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TransactionMinusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TransactionMinusBroken: TransactionMinusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TransactionMinusBrokenSvg}></AntdIcon>;
};

TransactionMinusBroken.displayName = 'TransactionMinusBroken';
TransactionMinusBroken.inheritAttrs = false;
export default TransactionMinusBroken;