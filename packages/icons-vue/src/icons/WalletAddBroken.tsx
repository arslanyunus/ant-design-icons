// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletAddBrokenSvg from '@ant-design/icons-svg/lib/asn/WalletAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletAddBroken: WalletAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletAddBrokenSvg}></AntdIcon>;
};

WalletAddBroken.displayName = 'WalletAddBroken';
WalletAddBroken.inheritAttrs = false;
export default WalletAddBroken;