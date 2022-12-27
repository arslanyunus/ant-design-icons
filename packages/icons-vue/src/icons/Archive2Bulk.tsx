// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Archive2BulkSvg from '@ant-design/icons-svg/lib/asn/Archive2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Archive2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Archive2Bulk: Archive2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Archive2BulkSvg}></AntdIcon>;
};

Archive2Bulk.displayName = 'Archive2Bulk';
Archive2Bulk.inheritAttrs = false;
export default Archive2Bulk;