// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarLeftLinearSvg from '@ant-design/icons-svg/lib/asn/SidebarLeftLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarLeftLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarLeftLinear: SidebarLeftLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarLeftLinearSvg}></AntdIcon>;
};

SidebarLeftLinear.displayName = 'SidebarLeftLinear';
SidebarLeftLinear.inheritAttrs = false;
export default SidebarLeftLinear;