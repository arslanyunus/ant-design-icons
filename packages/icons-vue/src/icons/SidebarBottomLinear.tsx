// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarBottomLinearSvg from '@ant-design/icons-svg/lib/asn/SidebarBottomLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarBottomLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarBottomLinear: SidebarBottomLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarBottomLinearSvg}></AntdIcon>;
};

SidebarBottomLinear.displayName = 'SidebarBottomLinear';
SidebarBottomLinear.inheritAttrs = false;
export default SidebarBottomLinear;