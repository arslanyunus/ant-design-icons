// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletAdd1OutlineSvg from '@ant-design/icons-svg/lib/asn/WalletAdd1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletAdd1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletAdd1Outline: WalletAdd1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletAdd1OutlineSvg}></AntdIcon>;
};

WalletAdd1Outline.displayName = 'WalletAdd1Outline';
WalletAdd1Outline.inheritAttrs = false;
export default WalletAdd1Outline;