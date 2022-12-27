// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarTopBoldSvg from '@ant-design/icons-svg/lib/asn/SidebarTopBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarTopBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarTopBold: SidebarTopBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarTopBoldSvg}></AntdIcon>;
};

SidebarTopBold.displayName = 'SidebarTopBold';
SidebarTopBold.inheritAttrs = false;
export default SidebarTopBold;