// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BankBulkSvg from '@ant-design/icons-svg/lib/asn/BankBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BankBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BankBulk: BankBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankBulkSvg}></AntdIcon>;
};

BankBulk.displayName = 'BankBulk';
BankBulk.inheritAttrs = false;
export default BankBulk;