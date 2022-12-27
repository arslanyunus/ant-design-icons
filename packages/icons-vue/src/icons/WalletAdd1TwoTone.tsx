// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletAdd1TwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletAdd1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletAdd1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletAdd1TwoTone: WalletAdd1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletAdd1TwoToneSvg}></AntdIcon>;
};

WalletAdd1TwoTone.displayName = 'WalletAdd1TwoTone';
WalletAdd1TwoTone.inheritAttrs = false;
export default WalletAdd1TwoTone;