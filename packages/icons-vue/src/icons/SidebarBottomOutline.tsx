// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarBottomOutlineSvg from '@ant-design/icons-svg/lib/asn/SidebarBottomOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarBottomOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarBottomOutline: SidebarBottomOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarBottomOutlineSvg}></AntdIcon>;
};

SidebarBottomOutline.displayName = 'SidebarBottomOutline';
SidebarBottomOutline.inheritAttrs = false;
export default SidebarBottomOutline;