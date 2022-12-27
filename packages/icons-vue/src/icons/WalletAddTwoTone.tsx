// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletAddTwoTone: WalletAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletAddTwoToneSvg}></AntdIcon>;
};

WalletAddTwoTone.displayName = 'WalletAddTwoTone';
WalletAddTwoTone.inheritAttrs = false;
export default WalletAddTwoTone;