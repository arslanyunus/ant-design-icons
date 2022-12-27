// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletRemoveBold: EmptyWalletRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletRemoveBoldSvg}></AntdIcon>;
};

EmptyWalletRemoveBold.displayName = 'EmptyWalletRemoveBold';
EmptyWalletRemoveBold.inheritAttrs = false;
export default EmptyWalletRemoveBold;