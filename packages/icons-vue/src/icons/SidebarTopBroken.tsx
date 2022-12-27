// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarTopBrokenSvg from '@ant-design/icons-svg/lib/asn/SidebarTopBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarTopBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarTopBroken: SidebarTopBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarTopBrokenSvg}></AntdIcon>;
};

SidebarTopBroken.displayName = 'SidebarTopBroken';
SidebarTopBroken.inheritAttrs = false;
export default SidebarTopBroken;