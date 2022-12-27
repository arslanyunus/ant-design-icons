// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletTimeOutlineSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletTimeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletTimeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletTimeOutline: EmptyWalletTimeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletTimeOutlineSvg}></AntdIcon>;
};

EmptyWalletTimeOutline.displayName = 'EmptyWalletTimeOutline';
EmptyWalletTimeOutline.inheritAttrs = false;
export default EmptyWalletTimeOutline;