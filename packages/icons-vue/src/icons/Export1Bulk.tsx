// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export1BulkSvg from '@ant-design/icons-svg/lib/asn/Export1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export1Bulk: Export1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export1BulkSvg}></AntdIcon>;
};

Export1Bulk.displayName = 'Export1Bulk';
Export1Bulk.inheritAttrs = false;
export default Export1Bulk;