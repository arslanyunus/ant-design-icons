// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletOutlineSvg from '@ant-design/icons-svg/lib/asn/WalletOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletOutline: WalletOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletOutlineSvg}></AntdIcon>;
};

WalletOutline.displayName = 'WalletOutline';
WalletOutline.inheritAttrs = false;
export default WalletOutline;