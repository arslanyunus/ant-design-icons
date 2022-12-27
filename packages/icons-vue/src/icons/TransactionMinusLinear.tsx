// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TransactionMinusLinearSvg from '@ant-design/icons-svg/lib/asn/TransactionMinusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TransactionMinusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TransactionMinusLinear: TransactionMinusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TransactionMinusLinearSvg}></AntdIcon>;
};

TransactionMinusLinear.displayName = 'TransactionMinusLinear';
TransactionMinusLinear.inheritAttrs = false;
export default TransactionMinusLinear;