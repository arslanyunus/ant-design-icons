// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentLikeBulkSvg from '@ant-design/icons-svg/lib/asn/DocumentLikeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentLikeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentLikeBulk: DocumentLikeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentLikeBulkSvg}></AntdIcon>;
};

DocumentLikeBulk.displayName = 'DocumentLikeBulk';
DocumentLikeBulk.inheritAttrs = false;
export default DocumentLikeBulk;