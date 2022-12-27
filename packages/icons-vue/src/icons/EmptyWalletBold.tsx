// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletBoldSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletBold: EmptyWalletBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletBoldSvg}></AntdIcon>;
};

EmptyWalletBold.displayName = 'EmptyWalletBold';
EmptyWalletBold.inheritAttrs = false;
export default EmptyWalletBold;