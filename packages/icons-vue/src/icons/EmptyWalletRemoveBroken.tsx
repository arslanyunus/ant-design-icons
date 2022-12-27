// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletRemoveBroken: EmptyWalletRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletRemoveBrokenSvg}></AntdIcon>;
};

EmptyWalletRemoveBroken.displayName = 'EmptyWalletRemoveBroken';
EmptyWalletRemoveBroken.inheritAttrs = false;
export default EmptyWalletRemoveBroken;