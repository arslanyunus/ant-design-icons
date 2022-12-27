// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCopyBulkSvg from '@ant-design/icons-svg/lib/asn/DocumentCopyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCopyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCopyBulk: DocumentCopyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCopyBulkSvg}></AntdIcon>;
};

DocumentCopyBulk.displayName = 'DocumentCopyBulk';
DocumentCopyBulk.inheritAttrs = false;
export default DocumentCopyBulk;