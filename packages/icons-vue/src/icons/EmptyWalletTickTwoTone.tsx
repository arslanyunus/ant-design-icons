// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletTickTwoTone: EmptyWalletTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletTickTwoToneSvg}></AntdIcon>;
};

EmptyWalletTickTwoTone.displayName = 'EmptyWalletTickTwoTone';
EmptyWalletTickTwoTone.inheritAttrs = false;
export default EmptyWalletTickTwoTone;