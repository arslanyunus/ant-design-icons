// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletMinusOutlineSvg from '@ant-design/icons-svg/lib/asn/WalletMinusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletMinusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletMinusOutline: WalletMinusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletMinusOutlineSvg}></AntdIcon>;
};

WalletMinusOutline.displayName = 'WalletMinusOutline';
WalletMinusOutline.inheritAttrs = false;
export default WalletMinusOutline;