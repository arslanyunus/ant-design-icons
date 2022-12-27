// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletTimeBoldSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletTimeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletTimeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletTimeBold: EmptyWalletTimeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletTimeBoldSvg}></AntdIcon>;
};

EmptyWalletTimeBold.displayName = 'EmptyWalletTimeBold';
EmptyWalletTimeBold.inheritAttrs = false;
export default EmptyWalletTimeBold;