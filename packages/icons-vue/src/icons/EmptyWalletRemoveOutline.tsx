// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletRemoveOutline: EmptyWalletRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletRemoveOutlineSvg}></AntdIcon>;
};

EmptyWalletRemoveOutline.displayName = 'EmptyWalletRemoveOutline';
EmptyWalletRemoveOutline.inheritAttrs = false;
export default EmptyWalletRemoveOutline;