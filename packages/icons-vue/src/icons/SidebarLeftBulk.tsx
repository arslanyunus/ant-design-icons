// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarLeftBulkSvg from '@ant-design/icons-svg/lib/asn/SidebarLeftBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarLeftBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarLeftBulk: SidebarLeftBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarLeftBulkSvg}></AntdIcon>;
};

SidebarLeftBulk.displayName = 'SidebarLeftBulk';
SidebarLeftBulk.inheritAttrs = false;
export default SidebarLeftBulk;