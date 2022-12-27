// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wallet1BulkSvg from '@ant-design/icons-svg/lib/asn/Wallet1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wallet1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wallet1Bulk: Wallet1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet1BulkSvg}></AntdIcon>;
};

Wallet1Bulk.displayName = 'Wallet1Bulk';
Wallet1Bulk.inheritAttrs = false;
export default Wallet1Bulk;