// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletCheckBrokenSvg from '@ant-design/icons-svg/lib/asn/WalletCheckBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletCheckBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletCheckBroken: WalletCheckBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletCheckBrokenSvg}></AntdIcon>;
};

WalletCheckBroken.displayName = 'WalletCheckBroken';
WalletCheckBroken.inheritAttrs = false;
export default WalletCheckBroken;