// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletCheckOutlineSvg from '@ant-design/icons-svg/lib/asn/WalletCheckOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletCheckOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletCheckOutline: WalletCheckOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletCheckOutlineSvg}></AntdIcon>;
};

WalletCheckOutline.displayName = 'WalletCheckOutline';
WalletCheckOutline.inheritAttrs = false;
export default WalletCheckOutline;