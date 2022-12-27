// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletTimeBrokenSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletTimeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletTimeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletTimeBroken: EmptyWalletTimeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletTimeBrokenSvg}></AntdIcon>;
};

EmptyWalletTimeBroken.displayName = 'EmptyWalletTimeBroken';
EmptyWalletTimeBroken.inheritAttrs = false;
export default EmptyWalletTimeBroken;