// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GroupBulkSvg from '@ant-design/icons-svg/lib/asn/GroupBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GroupBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GroupBulk: GroupBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GroupBulkSvg}></AntdIcon>;
};

GroupBulk.displayName = 'GroupBulk';
GroupBulk.inheritAttrs = false;
export default GroupBulk;