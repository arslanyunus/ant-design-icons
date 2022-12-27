// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletAddBulkSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletAddBulk: EmptyWalletAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletAddBulkSvg}></AntdIcon>;
};

EmptyWalletAddBulk.displayName = 'EmptyWalletAddBulk';
EmptyWalletAddBulk.inheritAttrs = false;
export default EmptyWalletAddBulk;