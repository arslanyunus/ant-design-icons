// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarLeftBoldSvg from '@ant-design/icons-svg/lib/asn/SidebarLeftBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarLeftBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarLeftBold: SidebarLeftBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarLeftBoldSvg}></AntdIcon>;
};

SidebarLeftBold.displayName = 'SidebarLeftBold';
SidebarLeftBold.inheritAttrs = false;
export default SidebarLeftBold;