// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/WalletRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletRemoveOutline: WalletRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletRemoveOutlineSvg}></AntdIcon>;
};

WalletRemoveOutline.displayName = 'WalletRemoveOutline';
WalletRemoveOutline.inheritAttrs = false;
export default WalletRemoveOutline;