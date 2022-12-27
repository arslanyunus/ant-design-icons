// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletAddBulkSvg from '@ant-design/icons-svg/lib/asn/WalletAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletAddBulk: WalletAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletAddBulkSvg}></AntdIcon>;
};

WalletAddBulk.displayName = 'WalletAddBulk';
WalletAddBulk.inheritAttrs = false;
export default WalletAddBulk;