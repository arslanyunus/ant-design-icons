// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarBottomBulkSvg from '@ant-design/icons-svg/lib/asn/SidebarBottomBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarBottomBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarBottomBulk: SidebarBottomBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarBottomBulkSvg}></AntdIcon>;
};

SidebarBottomBulk.displayName = 'SidebarBottomBulk';
SidebarBottomBulk.inheritAttrs = false;
export default SidebarBottomBulk;