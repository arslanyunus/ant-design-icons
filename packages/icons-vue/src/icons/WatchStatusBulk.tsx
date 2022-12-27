// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WatchStatusBulkSvg from '@ant-design/icons-svg/lib/asn/WatchStatusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WatchStatusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WatchStatusBulk: WatchStatusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WatchStatusBulkSvg}></AntdIcon>;
};

WatchStatusBulk.displayName = 'WatchStatusBulk';
WatchStatusBulk.inheritAttrs = false;
export default WatchStatusBulk;