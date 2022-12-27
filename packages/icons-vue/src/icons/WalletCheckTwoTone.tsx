// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletCheckTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletCheckTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletCheckTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletCheckTwoTone: WalletCheckTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletCheckTwoToneSvg}></AntdIcon>;
};

WalletCheckTwoTone.displayName = 'WalletCheckTwoTone';
WalletCheckTwoTone.inheritAttrs = false;
export default WalletCheckTwoTone;