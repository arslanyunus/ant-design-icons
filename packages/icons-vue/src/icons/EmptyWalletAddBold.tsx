// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletAddBoldSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletAddBold: EmptyWalletAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletAddBoldSvg}></AntdIcon>;
};

EmptyWalletAddBold.displayName = 'EmptyWalletAddBold';
EmptyWalletAddBold.inheritAttrs = false;
export default EmptyWalletAddBold;