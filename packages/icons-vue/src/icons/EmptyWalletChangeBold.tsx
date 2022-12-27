// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletChangeBoldSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletChangeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletChangeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletChangeBold: EmptyWalletChangeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletChangeBoldSvg}></AntdIcon>;
};

EmptyWalletChangeBold.displayName = 'EmptyWalletChangeBold';
EmptyWalletChangeBold.inheritAttrs = false;
export default EmptyWalletChangeBold;