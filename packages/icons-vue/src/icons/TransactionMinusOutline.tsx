// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TransactionMinusOutlineSvg from '@ant-design/icons-svg/lib/asn/TransactionMinusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TransactionMinusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TransactionMinusOutline: TransactionMinusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TransactionMinusOutlineSvg}></AntdIcon>;
};

TransactionMinusOutline.displayName = 'TransactionMinusOutline';
TransactionMinusOutline.inheritAttrs = false;
export default TransactionMinusOutline;