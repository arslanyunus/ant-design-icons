// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletSearchOutlineSvg from '@ant-design/icons-svg/lib/asn/WalletSearchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletSearchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletSearchOutline: WalletSearchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletSearchOutlineSvg}></AntdIcon>;
};

WalletSearchOutline.displayName = 'WalletSearchOutline';
WalletSearchOutline.inheritAttrs = false;
export default WalletSearchOutline;