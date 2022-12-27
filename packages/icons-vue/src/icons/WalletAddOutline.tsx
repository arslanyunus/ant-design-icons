// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletAddOutlineSvg from '@ant-design/icons-svg/lib/asn/WalletAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletAddOutline: WalletAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletAddOutlineSvg}></AntdIcon>;
};

WalletAddOutline.displayName = 'WalletAddOutline';
WalletAddOutline.inheritAttrs = false;
export default WalletAddOutline;