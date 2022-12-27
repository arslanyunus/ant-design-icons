// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletSearchBrokenSvg from '@ant-design/icons-svg/lib/asn/WalletSearchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletSearchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletSearchBroken: WalletSearchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletSearchBrokenSvg}></AntdIcon>;
};

WalletSearchBroken.displayName = 'WalletSearchBroken';
WalletSearchBroken.inheritAttrs = false;
export default WalletSearchBroken;