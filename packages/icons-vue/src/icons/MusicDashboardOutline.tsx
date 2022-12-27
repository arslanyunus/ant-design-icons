// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicDashboardOutlineSvg from '@ant-design/icons-svg/lib/asn/MusicDashboardOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicDashboardOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicDashboardOutline: MusicDashboardOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicDashboardOutlineSvg}></AntdIcon>;
};

MusicDashboardOutline.displayName = 'MusicDashboardOutline';
MusicDashboardOutline.inheritAttrs = false;
export default MusicDashboardOutline;