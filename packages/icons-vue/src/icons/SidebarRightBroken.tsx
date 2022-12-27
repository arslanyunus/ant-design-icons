// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarRightBrokenSvg from '@ant-design/icons-svg/lib/asn/SidebarRightBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarRightBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarRightBroken: SidebarRightBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarRightBrokenSvg}></AntdIcon>;
};

SidebarRightBroken.displayName = 'SidebarRightBroken';
SidebarRightBroken.inheritAttrs = false;
export default SidebarRightBroken;