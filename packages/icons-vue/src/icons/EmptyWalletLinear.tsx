// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletLinearSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletLinear: EmptyWalletLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletLinearSvg}></AntdIcon>;
};

EmptyWalletLinear.displayName = 'EmptyWalletLinear';
EmptyWalletLinear.inheritAttrs = false;
export default EmptyWalletLinear;