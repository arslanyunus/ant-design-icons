// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicDashboardTwoToneSvg from '@ant-design/icons-svg/lib/asn/MusicDashboardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicDashboardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicDashboardTwoTone: MusicDashboardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicDashboardTwoToneSvg}></AntdIcon>;
};

MusicDashboardTwoTone.displayName = 'MusicDashboardTwoTone';
MusicDashboardTwoTone.inheritAttrs = false;
export default MusicDashboardTwoTone;