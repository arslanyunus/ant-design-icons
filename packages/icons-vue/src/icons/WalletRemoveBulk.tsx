// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/WalletRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletRemoveBulk: WalletRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletRemoveBulkSvg}></AntdIcon>;
};

WalletRemoveBulk.displayName = 'WalletRemoveBulk';
WalletRemoveBulk.inheritAttrs = false;
export default WalletRemoveBulk;