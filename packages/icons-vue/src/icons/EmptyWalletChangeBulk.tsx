// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletChangeBulkSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletChangeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletChangeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletChangeBulk: EmptyWalletChangeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletChangeBulkSvg}></AntdIcon>;
};

EmptyWalletChangeBulk.displayName = 'EmptyWalletChangeBulk';
EmptyWalletChangeBulk.inheritAttrs = false;
export default EmptyWalletChangeBulk;