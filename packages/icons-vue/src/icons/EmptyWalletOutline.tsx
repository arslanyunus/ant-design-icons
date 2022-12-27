// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletOutlineSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletOutline: EmptyWalletOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletOutlineSvg}></AntdIcon>;
};

EmptyWalletOutline.displayName = 'EmptyWalletOutline';
EmptyWalletOutline.inheritAttrs = false;
export default EmptyWalletOutline;