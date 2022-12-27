// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentUploadOutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentUploadOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentUploadOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentUploadOutline: DocumentUploadOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentUploadOutlineSvg}></AntdIcon>;
};

DocumentUploadOutline.displayName = 'DocumentUploadOutline';
DocumentUploadOutline.inheritAttrs = false;
export default DocumentUploadOutline;