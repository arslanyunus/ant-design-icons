// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletMinusTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletMinusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletMinusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletMinusTwoTone: WalletMinusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletMinusTwoToneSvg}></AntdIcon>;
};

WalletMinusTwoTone.displayName = 'WalletMinusTwoTone';
WalletMinusTwoTone.inheritAttrs = false;
export default WalletMinusTwoTone;