// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletMoneyBoldSvg from '@ant-design/icons-svg/lib/asn/WalletMoneyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletMoneyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletMoneyBold: WalletMoneyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletMoneyBoldSvg}></AntdIcon>;
};

WalletMoneyBold.displayName = 'WalletMoneyBold';
WalletMoneyBold.inheritAttrs = false;
export default WalletMoneyBold;