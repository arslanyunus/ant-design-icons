// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletTickBoldSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletTickBold: EmptyWalletTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletTickBoldSvg}></AntdIcon>;
};

EmptyWalletTickBold.displayName = 'EmptyWalletTickBold';
EmptyWalletTickBold.inheritAttrs = false;
export default EmptyWalletTickBold;