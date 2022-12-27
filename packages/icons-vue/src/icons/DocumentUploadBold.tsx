// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentUploadBoldSvg from '@ant-design/icons-svg/lib/asn/DocumentUploadBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentUploadBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentUploadBold: DocumentUploadBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentUploadBoldSvg}></AntdIcon>;
};

DocumentUploadBold.displayName = 'DocumentUploadBold';
DocumentUploadBold.inheritAttrs = false;
export default DocumentUploadBold;