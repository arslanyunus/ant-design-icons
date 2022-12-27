// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletTickLinearSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletTickLinear: EmptyWalletTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletTickLinearSvg}></AntdIcon>;
};

EmptyWalletTickLinear.displayName = 'EmptyWalletTickLinear';
EmptyWalletTickLinear.inheritAttrs = false;
export default EmptyWalletTickLinear;