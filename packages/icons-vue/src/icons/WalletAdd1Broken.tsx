// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletAdd1BrokenSvg from '@ant-design/icons-svg/lib/asn/WalletAdd1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletAdd1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletAdd1Broken: WalletAdd1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletAdd1BrokenSvg}></AntdIcon>;
};

WalletAdd1Broken.displayName = 'WalletAdd1Broken';
WalletAdd1Broken.inheritAttrs = false;
export default WalletAdd1Broken;