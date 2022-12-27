// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletRemoveTwoTone: WalletRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletRemoveTwoToneSvg}></AntdIcon>;
};

WalletRemoveTwoTone.displayName = 'WalletRemoveTwoTone';
WalletRemoveTwoTone.inheritAttrs = false;
export default WalletRemoveTwoTone;