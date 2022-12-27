// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentFavoriteBulkSvg from '@ant-design/icons-svg/lib/asn/DocumentFavoriteBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentFavoriteBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentFavoriteBulk: DocumentFavoriteBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentFavoriteBulkSvg}></AntdIcon>;
};

DocumentFavoriteBulk.displayName = 'DocumentFavoriteBulk';
DocumentFavoriteBulk.inheritAttrs = false;
export default DocumentFavoriteBulk;