// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarTopOutlineSvg from '@ant-design/icons-svg/lib/asn/SidebarTopOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarTopOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarTopOutline: SidebarTopOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarTopOutlineSvg}></AntdIcon>;
};

SidebarTopOutline.displayName = 'SidebarTopOutline';
SidebarTopOutline.inheritAttrs = false;
export default SidebarTopOutline;