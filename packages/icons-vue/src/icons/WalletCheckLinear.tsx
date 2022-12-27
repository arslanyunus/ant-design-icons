// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletCheckLinearSvg from '@ant-design/icons-svg/lib/asn/WalletCheckLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletCheckLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletCheckLinear: WalletCheckLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletCheckLinearSvg}></AntdIcon>;
};

WalletCheckLinear.displayName = 'WalletCheckLinear';
WalletCheckLinear.inheritAttrs = false;
export default WalletCheckLinear;