// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletSearchTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletSearchTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletSearchTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletSearchTwoTone: WalletSearchTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletSearchTwoToneSvg}></AntdIcon>;
};

WalletSearchTwoTone.displayName = 'WalletSearchTwoTone';
WalletSearchTwoTone.inheritAttrs = false;
export default WalletSearchTwoTone;