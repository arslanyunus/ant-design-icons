// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicDashboardLinearSvg from '@ant-design/icons-svg/lib/asn/MusicDashboardLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicDashboardLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicDashboardLinear: MusicDashboardLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicDashboardLinearSvg}></AntdIcon>;
};

MusicDashboardLinear.displayName = 'MusicDashboardLinear';
MusicDashboardLinear.inheritAttrs = false;
export default MusicDashboardLinear;