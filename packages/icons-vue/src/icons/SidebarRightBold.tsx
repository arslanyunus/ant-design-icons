// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarRightBoldSvg from '@ant-design/icons-svg/lib/asn/SidebarRightBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarRightBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarRightBold: SidebarRightBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarRightBoldSvg}></AntdIcon>;
};

SidebarRightBold.displayName = 'SidebarRightBold';
SidebarRightBold.inheritAttrs = false;
export default SidebarRightBold;