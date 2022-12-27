// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletSearchBoldSvg from '@ant-design/icons-svg/lib/asn/WalletSearchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletSearchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletSearchBold: WalletSearchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletSearchBoldSvg}></AntdIcon>;
};

WalletSearchBold.displayName = 'WalletSearchBold';
WalletSearchBold.inheritAttrs = false;
export default WalletSearchBold;