// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Archive1BulkSvg from '@ant-design/icons-svg/lib/asn/Archive1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Archive1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Archive1Bulk: Archive1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Archive1BulkSvg}></AntdIcon>;
};

Archive1Bulk.displayName = 'Archive1Bulk';
Archive1Bulk.inheritAttrs = false;
export default Archive1Bulk;