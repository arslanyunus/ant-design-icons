// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletMinusBoldSvg from '@ant-design/icons-svg/lib/asn/WalletMinusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletMinusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletMinusBold: WalletMinusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletMinusBoldSvg}></AntdIcon>;
};

WalletMinusBold.displayName = 'WalletMinusBold';
WalletMinusBold.inheritAttrs = false;
export default WalletMinusBold;