// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentText1BulkSvg from '@ant-design/icons-svg/lib/asn/DocumentText1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentText1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentText1Bulk: DocumentText1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentText1BulkSvg}></AntdIcon>;
};

DocumentText1Bulk.displayName = 'DocumentText1Bulk';
DocumentText1Bulk.inheritAttrs = false;
export default DocumentText1Bulk;