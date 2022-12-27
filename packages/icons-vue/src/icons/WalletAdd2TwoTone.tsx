// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletAdd2TwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletAdd2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletAdd2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletAdd2TwoTone: WalletAdd2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletAdd2TwoToneSvg}></AntdIcon>;
};

WalletAdd2TwoTone.displayName = 'WalletAdd2TwoTone';
WalletAdd2TwoTone.inheritAttrs = false;
export default WalletAdd2TwoTone;