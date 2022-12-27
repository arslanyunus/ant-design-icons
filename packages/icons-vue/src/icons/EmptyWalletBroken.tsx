// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletBrokenSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletBroken: EmptyWalletBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletBrokenSvg}></AntdIcon>;
};

EmptyWalletBroken.displayName = 'EmptyWalletBroken';
EmptyWalletBroken.inheritAttrs = false;
export default EmptyWalletBroken;