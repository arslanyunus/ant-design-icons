// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarTopTwoToneSvg from '@ant-design/icons-svg/lib/asn/SidebarTopTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarTopTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarTopTwoTone: SidebarTopTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarTopTwoToneSvg}></AntdIcon>;
};

SidebarTopTwoTone.displayName = 'SidebarTopTwoTone';
SidebarTopTwoTone.inheritAttrs = false;
export default SidebarTopTwoTone;