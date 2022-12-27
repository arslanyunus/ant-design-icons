// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletChangeLinearSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletChangeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletChangeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletChangeLinear: EmptyWalletChangeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletChangeLinearSvg}></AntdIcon>;
};

EmptyWalletChangeLinear.displayName = 'EmptyWalletChangeLinear';
EmptyWalletChangeLinear.inheritAttrs = false;
export default EmptyWalletChangeLinear;