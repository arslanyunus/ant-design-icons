// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletTimeLinearSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletTimeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletTimeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletTimeLinear: EmptyWalletTimeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletTimeLinearSvg}></AntdIcon>;
};

EmptyWalletTimeLinear.displayName = 'EmptyWalletTimeLinear';
EmptyWalletTimeLinear.inheritAttrs = false;
export default EmptyWalletTimeLinear;