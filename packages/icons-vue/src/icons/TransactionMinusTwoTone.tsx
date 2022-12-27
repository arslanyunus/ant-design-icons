// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TransactionMinusTwoToneSvg from '@ant-design/icons-svg/lib/asn/TransactionMinusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TransactionMinusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TransactionMinusTwoTone: TransactionMinusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TransactionMinusTwoToneSvg}></AntdIcon>;
};

TransactionMinusTwoTone.displayName = 'TransactionMinusTwoTone';
TransactionMinusTwoTone.inheritAttrs = false;
export default TransactionMinusTwoTone;