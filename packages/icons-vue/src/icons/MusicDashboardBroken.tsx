// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicDashboardBrokenSvg from '@ant-design/icons-svg/lib/asn/MusicDashboardBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicDashboardBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicDashboardBroken: MusicDashboardBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicDashboardBrokenSvg}></AntdIcon>;
};

MusicDashboardBroken.displayName = 'MusicDashboardBroken';
MusicDashboardBroken.inheritAttrs = false;
export default MusicDashboardBroken;