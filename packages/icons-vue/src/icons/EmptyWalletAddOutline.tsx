// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletAddOutlineSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletAddOutline: EmptyWalletAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletAddOutlineSvg}></AntdIcon>;
};

EmptyWalletAddOutline.displayName = 'EmptyWalletAddOutline';
EmptyWalletAddOutline.inheritAttrs = false;
export default EmptyWalletAddOutline;