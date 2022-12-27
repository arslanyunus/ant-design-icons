// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletTickOutlineSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletTickOutline: EmptyWalletTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletTickOutlineSvg}></AntdIcon>;
};

EmptyWalletTickOutline.displayName = 'EmptyWalletTickOutline';
EmptyWalletTickOutline.inheritAttrs = false;
export default EmptyWalletTickOutline;