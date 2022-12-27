// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarBottomBoldSvg from '@ant-design/icons-svg/lib/asn/SidebarBottomBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarBottomBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarBottomBold: SidebarBottomBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarBottomBoldSvg}></AntdIcon>;
};

SidebarBottomBold.displayName = 'SidebarBottomBold';
SidebarBottomBold.inheritAttrs = false;
export default SidebarBottomBold;