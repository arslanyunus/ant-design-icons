// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletBrokenSvg from '@ant-design/icons-svg/lib/asn/WalletBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletBroken: WalletBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletBrokenSvg}></AntdIcon>;
};

WalletBroken.displayName = 'WalletBroken';
WalletBroken.inheritAttrs = false;
export default WalletBroken;