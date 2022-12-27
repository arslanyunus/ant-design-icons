// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export3BulkSvg from '@ant-design/icons-svg/lib/asn/Export3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export3Bulk: Export3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export3BulkSvg}></AntdIcon>;
};

Export3Bulk.displayName = 'Export3Bulk';
Export3Bulk.inheritAttrs = false;
export default Export3Bulk;