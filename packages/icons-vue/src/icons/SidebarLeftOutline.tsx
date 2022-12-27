// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarLeftOutlineSvg from '@ant-design/icons-svg/lib/asn/SidebarLeftOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarLeftOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarLeftOutline: SidebarLeftOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarLeftOutlineSvg}></AntdIcon>;
};

SidebarLeftOutline.displayName = 'SidebarLeftOutline';
SidebarLeftOutline.inheritAttrs = false;
export default SidebarLeftOutline;