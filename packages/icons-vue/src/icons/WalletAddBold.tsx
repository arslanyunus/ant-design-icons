// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletAddBoldSvg from '@ant-design/icons-svg/lib/asn/WalletAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletAddBold: WalletAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletAddBoldSvg}></AntdIcon>;
};

WalletAddBold.displayName = 'WalletAddBold';
WalletAddBold.inheritAttrs = false;
export default WalletAddBold;