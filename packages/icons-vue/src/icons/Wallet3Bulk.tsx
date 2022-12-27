// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet3BulkSvg from '@ant-design/icons-svg/lib/asn/Wallet3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet3Bulk: Wallet3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet3BulkSvg}></AntdIcon>;
};

Wallet3Bulk.displayName = 'Wallet3Bulk';
Wallet3Bulk.inheritAttrs = false;
export default Wallet3Bulk;