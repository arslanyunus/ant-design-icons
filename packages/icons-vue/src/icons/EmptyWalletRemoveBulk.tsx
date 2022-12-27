// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletRemoveBulk: EmptyWalletRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletRemoveBulkSvg}></AntdIcon>;
};

EmptyWalletRemoveBulk.displayName = 'EmptyWalletRemoveBulk';
EmptyWalletRemoveBulk.inheritAttrs = false;
export default EmptyWalletRemoveBulk;