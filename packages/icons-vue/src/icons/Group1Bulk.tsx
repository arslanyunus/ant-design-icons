// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Group1BulkSvg from '@ant-design/icons-svg/lib/asn/Group1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Group1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Group1Bulk: Group1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Group1BulkSvg}></AntdIcon>;
};

Group1Bulk.displayName = 'Group1Bulk';
Group1Bulk.inheritAttrs = false;
export default Group1Bulk;