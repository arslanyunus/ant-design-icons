// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletMoneyBrokenSvg from '@ant-design/icons-svg/lib/asn/WalletMoneyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletMoneyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletMoneyBroken: WalletMoneyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletMoneyBrokenSvg}></AntdIcon>;
};

WalletMoneyBroken.displayName = 'WalletMoneyBroken';
WalletMoneyBroken.inheritAttrs = false;
export default WalletMoneyBroken;