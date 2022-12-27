// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletCheckBulkSvg from '@ant-design/icons-svg/lib/asn/WalletCheckBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletCheckBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletCheckBulk: WalletCheckBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletCheckBulkSvg}></AntdIcon>;
};

WalletCheckBulk.displayName = 'WalletCheckBulk';
WalletCheckBulk.inheritAttrs = false;
export default WalletCheckBulk;