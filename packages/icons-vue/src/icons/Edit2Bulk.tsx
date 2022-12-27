// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Edit2BulkSvg from '@ant-design/icons-svg/lib/asn/Edit2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Edit2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Edit2Bulk: Edit2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Edit2BulkSvg}></AntdIcon>;
};

Edit2Bulk.displayName = 'Edit2Bulk';
Edit2Bulk.inheritAttrs = false;
export default Edit2Bulk;