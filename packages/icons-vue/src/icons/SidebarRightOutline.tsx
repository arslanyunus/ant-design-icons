// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarRightOutlineSvg from '@ant-design/icons-svg/lib/asn/SidebarRightOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarRightOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarRightOutline: SidebarRightOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarRightOutlineSvg}></AntdIcon>;
};

SidebarRightOutline.displayName = 'SidebarRightOutline';
SidebarRightOutline.inheritAttrs = false;
export default SidebarRightOutline;