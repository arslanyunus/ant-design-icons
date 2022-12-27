// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentDownloadBoldSvg from '@ant-design/icons-svg/lib/asn/DocumentDownloadBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentDownloadBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentDownloadBold: DocumentDownloadBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentDownloadBoldSvg}></AntdIcon>;
};

DocumentDownloadBold.displayName = 'DocumentDownloadBold';
DocumentDownloadBold.inheritAttrs = false;
export default DocumentDownloadBold;