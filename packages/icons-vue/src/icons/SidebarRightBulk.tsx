// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarRightBulkSvg from '@ant-design/icons-svg/lib/asn/SidebarRightBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarRightBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarRightBulk: SidebarRightBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarRightBulkSvg}></AntdIcon>;
};

SidebarRightBulk.displayName = 'SidebarRightBulk';
SidebarRightBulk.inheritAttrs = false;
export default SidebarRightBulk;