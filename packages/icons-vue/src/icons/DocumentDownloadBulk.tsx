// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentDownloadBulkSvg from '@ant-design/icons-svg/lib/asn/DocumentDownloadBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentDownloadBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentDownloadBulk: DocumentDownloadBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentDownloadBulkSvg}></AntdIcon>;
};

DocumentDownloadBulk.displayName = 'DocumentDownloadBulk';
DocumentDownloadBulk.inheritAttrs = false;
export default DocumentDownloadBulk;