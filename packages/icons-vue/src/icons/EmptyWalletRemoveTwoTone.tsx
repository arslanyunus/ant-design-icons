// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletRemoveTwoTone: EmptyWalletRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletRemoveTwoToneSvg}></AntdIcon>;
};

EmptyWalletRemoveTwoTone.displayName = 'EmptyWalletRemoveTwoTone';
EmptyWalletRemoveTwoTone.inheritAttrs = false;
export default EmptyWalletRemoveTwoTone;