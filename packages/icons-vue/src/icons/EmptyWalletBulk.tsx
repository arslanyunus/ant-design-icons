// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletBulkSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletBulk: EmptyWalletBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletBulkSvg}></AntdIcon>;
};

EmptyWalletBulk.displayName = 'EmptyWalletBulk';
EmptyWalletBulk.inheritAttrs = false;
export default EmptyWalletBulk;