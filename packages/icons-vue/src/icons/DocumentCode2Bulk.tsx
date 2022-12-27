// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCode2BulkSvg from '@ant-design/icons-svg/lib/asn/DocumentCode2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCode2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCode2Bulk: DocumentCode2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCode2BulkSvg}></AntdIcon>;
};

DocumentCode2Bulk.displayName = 'DocumentCode2Bulk';
DocumentCode2Bulk.inheritAttrs = false;
export default DocumentCode2Bulk;