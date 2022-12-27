// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletMinusBulkSvg from '@ant-design/icons-svg/lib/asn/WalletMinusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletMinusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletMinusBulk: WalletMinusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletMinusBulkSvg}></AntdIcon>;
};

WalletMinusBulk.displayName = 'WalletMinusBulk';
WalletMinusBulk.inheritAttrs = false;
export default WalletMinusBulk;