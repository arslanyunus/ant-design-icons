// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WatchBulkSvg from '@ant-design/icons-svg/lib/asn/WatchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WatchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WatchBulk: WatchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WatchBulkSvg}></AntdIcon>;
};

WatchBulk.displayName = 'WatchBulk';
WatchBulk.inheritAttrs = false;
export default WatchBulk;