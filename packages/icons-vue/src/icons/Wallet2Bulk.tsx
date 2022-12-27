// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet2BulkSvg from '@ant-design/icons-svg/lib/asn/Wallet2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet2Bulk: Wallet2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet2BulkSvg}></AntdIcon>;
};

Wallet2Bulk.displayName = 'Wallet2Bulk';
Wallet2Bulk.inheritAttrs = false;
export default Wallet2Bulk;