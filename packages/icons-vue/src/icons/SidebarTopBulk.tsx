// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarTopBulkSvg from '@ant-design/icons-svg/lib/asn/SidebarTopBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarTopBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarTopBulk: SidebarTopBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarTopBulkSvg}></AntdIcon>;
};

SidebarTopBulk.displayName = 'SidebarTopBulk';
SidebarTopBulk.inheritAttrs = false;
export default SidebarTopBulk;