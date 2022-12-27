// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarTopLinearSvg from '@ant-design/icons-svg/lib/asn/SidebarTopLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarTopLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarTopLinear: SidebarTopLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarTopLinearSvg}></AntdIcon>;
};

SidebarTopLinear.displayName = 'SidebarTopLinear';
SidebarTopLinear.inheritAttrs = false;
export default SidebarTopLinear;