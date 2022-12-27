// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export2BulkSvg from '@ant-design/icons-svg/lib/asn/Export2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export2Bulk: Export2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export2BulkSvg}></AntdIcon>;
};

Export2Bulk.displayName = 'Export2Bulk';
Export2Bulk.inheritAttrs = false;
export default Export2Bulk;