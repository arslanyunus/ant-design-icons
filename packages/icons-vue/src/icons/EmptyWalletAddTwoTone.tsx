// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletAddTwoTone: EmptyWalletAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletAddTwoToneSvg}></AntdIcon>;
};

EmptyWalletAddTwoTone.displayName = 'EmptyWalletAddTwoTone';
EmptyWalletAddTwoTone.inheritAttrs = false;
export default EmptyWalletAddTwoTone;