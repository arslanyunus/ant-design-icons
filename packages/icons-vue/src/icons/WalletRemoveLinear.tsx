// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/WalletRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletRemoveLinear: WalletRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletRemoveLinearSvg}></AntdIcon>;
};

WalletRemoveLinear.displayName = 'WalletRemoveLinear';
WalletRemoveLinear.inheritAttrs = false;
export default WalletRemoveLinear;