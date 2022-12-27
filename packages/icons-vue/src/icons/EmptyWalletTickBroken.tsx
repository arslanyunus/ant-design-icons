// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletTickBrokenSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletTickBroken: EmptyWalletTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletTickBrokenSvg}></AntdIcon>;
};

EmptyWalletTickBroken.displayName = 'EmptyWalletTickBroken';
EmptyWalletTickBroken.inheritAttrs = false;
export default EmptyWalletTickBroken;