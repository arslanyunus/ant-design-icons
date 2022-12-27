// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmptyWalletTimeBulkSvg from '@ant-design/icons-svg/lib/asn/EmptyWalletTimeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmptyWalletTimeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmptyWalletTimeBulk: EmptyWalletTimeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmptyWalletTimeBulkSvg}></AntdIcon>;
};

EmptyWalletTimeBulk.displayName = 'EmptyWalletTimeBulk';
EmptyWalletTimeBulk.inheritAttrs = false;
export default EmptyWalletTimeBulk;