// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletMoneyTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletMoneyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletMoneyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletMoneyTwoTone: WalletMoneyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletMoneyTwoToneSvg}></AntdIcon>;
};

WalletMoneyTwoTone.displayName = 'WalletMoneyTwoTone';
WalletMoneyTwoTone.inheritAttrs = false;
export default WalletMoneyTwoTone;