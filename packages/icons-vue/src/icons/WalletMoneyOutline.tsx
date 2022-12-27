// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletMoneyOutlineSvg from '@ant-design/icons-svg/lib/asn/WalletMoneyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletMoneyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletMoneyOutline: WalletMoneyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletMoneyOutlineSvg}></AntdIcon>;
};

WalletMoneyOutline.displayName = 'WalletMoneyOutline';
WalletMoneyOutline.inheritAttrs = false;
export default WalletMoneyOutline;