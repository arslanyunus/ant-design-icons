// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletLinearSvg from '@ant-design/icons-svg/lib/asn/WalletLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletLinear: WalletLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletLinearSvg}></AntdIcon>;
};

WalletLinear.displayName = 'WalletLinear';
WalletLinear.inheritAttrs = false;
export default WalletLinear;