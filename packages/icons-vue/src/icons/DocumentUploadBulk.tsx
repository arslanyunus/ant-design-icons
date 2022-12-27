// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentUploadBulkSvg from '@ant-design/icons-svg/lib/asn/DocumentUploadBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentUploadBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentUploadBulk: DocumentUploadBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentUploadBulkSvg}></AntdIcon>;
};

DocumentUploadBulk.displayName = 'DocumentUploadBulk';
DocumentUploadBulk.inheritAttrs = false;
export default DocumentUploadBulk;