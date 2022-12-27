// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletMoneyLinearSvg from '@ant-design/icons-svg/lib/asn/WalletMoneyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletMoneyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletMoneyLinear: WalletMoneyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletMoneyLinearSvg}></AntdIcon>;
};

WalletMoneyLinear.displayName = 'WalletMoneyLinear';
WalletMoneyLinear.inheritAttrs = false;
export default WalletMoneyLinear;