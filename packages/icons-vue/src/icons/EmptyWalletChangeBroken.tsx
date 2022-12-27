// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletChangeBrokenSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletChangeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletChangeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletChangeBroken: EmptyWalletChangeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletChangeBrokenSvg}></AntdIcon>;
};

EmptyWalletChangeBroken.displayName = 'EmptyWalletChangeBroken';
EmptyWalletChangeBroken.inheritAttrs = false;
export default EmptyWalletChangeBroken;