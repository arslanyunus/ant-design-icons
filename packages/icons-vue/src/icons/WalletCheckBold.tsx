// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletCheckBoldSvg from '@ant-design/icons-svg/lib/asn/WalletCheckBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletCheckBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletCheckBold: WalletCheckBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletCheckBoldSvg}></AntdIcon>;
};

WalletCheckBold.displayName = 'WalletCheckBold';
WalletCheckBold.inheritAttrs = false;
export default WalletCheckBold;