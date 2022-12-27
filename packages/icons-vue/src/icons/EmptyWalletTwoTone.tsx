// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletTwoToneSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletTwoTone: EmptyWalletTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletTwoToneSvg}></AntdIcon>;
};

EmptyWalletTwoTone.displayName = 'EmptyWalletTwoTone';
EmptyWalletTwoTone.inheritAttrs = false;
export default EmptyWalletTwoTone;