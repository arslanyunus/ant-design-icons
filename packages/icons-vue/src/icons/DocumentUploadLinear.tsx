// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentUploadLinearSvg from '@ant-design/icons-svg/lib/asn/DocumentUploadLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentUploadLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentUploadLinear: DocumentUploadLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentUploadLinearSvg}></AntdIcon>;
};

DocumentUploadLinear.displayName = 'DocumentUploadLinear';
DocumentUploadLinear.inheritAttrs = false;
export default DocumentUploadLinear;