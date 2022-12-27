// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletMoneyBulkSvg from '@ant-design/icons-svg/lib/asn/WalletMoneyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletMoneyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletMoneyBulk: WalletMoneyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletMoneyBulkSvg}></AntdIcon>;
};

WalletMoneyBulk.displayName = 'WalletMoneyBulk';
WalletMoneyBulk.inheritAttrs = false;
export default WalletMoneyBulk;