// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletAddLinearSvg from '@ant-design/icons-svg/lib/asn/WalletAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletAddLinear: WalletAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletAddLinearSvg}></AntdIcon>;
};

WalletAddLinear.displayName = 'WalletAddLinear';
WalletAddLinear.inheritAttrs = false;
export default WalletAddLinear;