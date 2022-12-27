// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletRemoveLinear: EmptyWalletRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletRemoveLinearSvg}></AntdIcon>;
};

EmptyWalletRemoveLinear.displayName = 'EmptyWalletRemoveLinear';
EmptyWalletRemoveLinear.inheritAttrs = false;
export default EmptyWalletRemoveLinear;