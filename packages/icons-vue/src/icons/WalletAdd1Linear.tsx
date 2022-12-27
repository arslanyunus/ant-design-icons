// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletAdd1LinearSvg from '@ant-design/icons-svg/lib/asn/WalletAdd1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletAdd1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletAdd1Linear: WalletAdd1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletAdd1LinearSvg}></AntdIcon>;
};

WalletAdd1Linear.displayName = 'WalletAdd1Linear';
WalletAdd1Linear.inheritAttrs = false;
export default WalletAdd1Linear;