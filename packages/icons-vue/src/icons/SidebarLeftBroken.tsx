// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarLeftBrokenSvg from '@ant-design/icons-svg/lib/asn/SidebarLeftBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarLeftBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarLeftBroken: SidebarLeftBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarLeftBrokenSvg}></AntdIcon>;
};

SidebarLeftBroken.displayName = 'SidebarLeftBroken';
SidebarLeftBroken.inheritAttrs = false;
export default SidebarLeftBroken;