// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletAdd1BulkSvg from '@ant-design/icons-svg/lib/asn/WalletAdd1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletAdd1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletAdd1Bulk: WalletAdd1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletAdd1BulkSvg}></AntdIcon>;
};

WalletAdd1Bulk.displayName = 'WalletAdd1Bulk';
WalletAdd1Bulk.inheritAttrs = false;
export default WalletAdd1Bulk;