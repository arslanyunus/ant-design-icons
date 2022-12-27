// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletAddBrokenSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletAddBroken: EmptyWalletAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletAddBrokenSvg}></AntdIcon>;
};

EmptyWalletAddBroken.displayName = 'EmptyWalletAddBroken';
EmptyWalletAddBroken.inheritAttrs = false;
export default EmptyWalletAddBroken;