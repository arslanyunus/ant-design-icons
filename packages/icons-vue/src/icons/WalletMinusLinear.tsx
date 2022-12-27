// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletMinusLinearSvg from '@ant-design/icons-svg/lib/asn/WalletMinusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletMinusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletMinusLinear: WalletMinusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletMinusLinearSvg}></AntdIcon>;
};

WalletMinusLinear.displayName = 'WalletMinusLinear';
WalletMinusLinear.inheritAttrs = false;
export default WalletMinusLinear;