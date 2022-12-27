// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletBulkSvg from '@ant-design/icons-svg/lib/asn/WalletBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletBulk: WalletBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletBulkSvg}></AntdIcon>;
};

WalletBulk.displayName = 'WalletBulk';
WalletBulk.inheritAttrs = false;
export default WalletBulk;