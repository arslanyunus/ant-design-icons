// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletSearchBulkSvg from '@ant-design/icons-svg/lib/asn/WalletSearchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletSearchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletSearchBulk: WalletSearchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletSearchBulkSvg}></AntdIcon>;
};

WalletSearchBulk.displayName = 'WalletSearchBulk';
WalletSearchBulk.inheritAttrs = false;
export default WalletSearchBulk;