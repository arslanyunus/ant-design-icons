// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/WalletRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletRemoveBold: WalletRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletRemoveBoldSvg}></AntdIcon>;
};

WalletRemoveBold.displayName = 'WalletRemoveBold';
WalletRemoveBold.inheritAttrs = false;
export default WalletRemoveBold;