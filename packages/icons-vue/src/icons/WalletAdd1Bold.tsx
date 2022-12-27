// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletAdd1BoldSvg from '@ant-design/icons-svg/lib/asn/WalletAdd1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletAdd1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletAdd1Bold: WalletAdd1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletAdd1BoldSvg}></AntdIcon>;
};

WalletAdd1Bold.displayName = 'WalletAdd1Bold';
WalletAdd1Bold.inheritAttrs = false;
export default WalletAdd1Bold;