// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentUploadTwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentUploadTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentUploadTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentUploadTwoTone: DocumentUploadTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentUploadTwoToneSvg}></AntdIcon>;
};

DocumentUploadTwoTone.displayName = 'DocumentUploadTwoTone';
DocumentUploadTwoTone.inheritAttrs = false;
export default DocumentUploadTwoTone;