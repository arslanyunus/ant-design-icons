// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletMinusBrokenSvg from '@ant-design/icons-svg/lib/asn/WalletMinusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletMinusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletMinusBroken: WalletMinusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletMinusBrokenSvg}></AntdIcon>;
};

WalletMinusBroken.displayName = 'WalletMinusBroken';
WalletMinusBroken.inheritAttrs = false;
export default WalletMinusBroken;