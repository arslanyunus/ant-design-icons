// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicDashboardBulkSvg from '@ant-design/icons-svg/lib/asn/MusicDashboardBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicDashboardBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicDashboardBulk: MusicDashboardBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicDashboardBulkSvg}></AntdIcon>;
};

MusicDashboardBulk.displayName = 'MusicDashboardBulk';
MusicDashboardBulk.inheritAttrs = false;
export default MusicDashboardBulk;