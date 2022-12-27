// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentUploadBrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentUploadBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentUploadBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentUploadBroken: DocumentUploadBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentUploadBrokenSvg}></AntdIcon>;
};

DocumentUploadBroken.displayName = 'DocumentUploadBroken';
DocumentUploadBroken.inheritAttrs = false;
export default DocumentUploadBroken;