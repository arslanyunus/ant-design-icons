// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarRightLinearSvg from '@ant-design/icons-svg/lib/asn/SidebarRightLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarRightLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarRightLinear: SidebarRightLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarRightLinearSvg}></AntdIcon>;
};

SidebarRightLinear.displayName = 'SidebarRightLinear';
SidebarRightLinear.inheritAttrs = false;
export default SidebarRightLinear;