// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletSearchLinearSvg from '@ant-design/icons-svg/lib/asn/WalletSearchLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletSearchLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletSearchLinear: WalletSearchLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletSearchLinearSvg}></AntdIcon>;
};

WalletSearchLinear.displayName = 'WalletSearchLinear';
WalletSearchLinear.inheritAttrs = false;
export default WalletSearchLinear;