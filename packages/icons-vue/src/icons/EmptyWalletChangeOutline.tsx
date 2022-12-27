// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletChangeOutlineSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletChangeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletChangeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletChangeOutline: EmptyWalletChangeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletChangeOutlineSvg}></AntdIcon>;
};

EmptyWalletChangeOutline.displayName = 'EmptyWalletChangeOutline';
EmptyWalletChangeOutline.inheritAttrs = false;
export default EmptyWalletChangeOutline;