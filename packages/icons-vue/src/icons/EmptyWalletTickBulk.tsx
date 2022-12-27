// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletTickBulkSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletTickBulk: EmptyWalletTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletTickBulkSvg}></AntdIcon>;
};

EmptyWalletTickBulk.displayName = 'EmptyWalletTickBulk';
EmptyWalletTickBulk.inheritAttrs = false;
export default EmptyWalletTickBulk;