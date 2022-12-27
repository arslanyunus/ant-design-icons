// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicDashboardBoldSvg from '@ant-design/icons-svg/lib/asn/MusicDashboardBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicDashboardBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicDashboardBold: MusicDashboardBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicDashboardBoldSvg}></AntdIcon>;
};

MusicDashboardBold.displayName = 'MusicDashboardBold';
MusicDashboardBold.inheritAttrs = false;
export default MusicDashboardBold;