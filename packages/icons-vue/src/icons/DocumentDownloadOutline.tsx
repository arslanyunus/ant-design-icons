// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentDownloadOutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentDownloadOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentDownloadOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentDownloadOutline: DocumentDownloadOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentDownloadOutlineSvg}></AntdIcon>;
};

DocumentDownloadOutline.displayName = 'DocumentDownloadOutline';
DocumentDownloadOutline.inheritAttrs = false;
export default DocumentDownloadOutline;