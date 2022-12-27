// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarBottomBrokenSvg from '@ant-design/icons-svg/lib/asn/SidebarBottomBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarBottomBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarBottomBroken: SidebarBottomBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarBottomBrokenSvg}></AntdIcon>;
};

SidebarBottomBroken.displayName = 'SidebarBottomBroken';
SidebarBottomBroken.inheritAttrs = false;
export default SidebarBottomBroken;