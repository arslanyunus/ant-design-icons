// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletBoldSvg from '@ant-design/icons-svg/lib/asn/WalletBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletBold: WalletBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletBoldSvg}></AntdIcon>;
};

WalletBold.displayName = 'WalletBold';
WalletBold.inheritAttrs = false;
export default WalletBold;