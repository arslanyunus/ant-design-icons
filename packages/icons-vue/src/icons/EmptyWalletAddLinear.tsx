// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletAddLinearSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletAddLinear: EmptyWalletAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletAddLinearSvg}></AntdIcon>;
};

EmptyWalletAddLinear.displayName = 'EmptyWalletAddLinear';
EmptyWalletAddLinear.inheritAttrs = false;
export default EmptyWalletAddLinear;