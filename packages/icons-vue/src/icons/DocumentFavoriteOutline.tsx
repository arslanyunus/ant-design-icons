// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentFavoriteOutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentFavoriteOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentFavoriteOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentFavoriteOutline: DocumentFavoriteOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentFavoriteOutlineSvg}></AntdIcon>;
};

DocumentFavoriteOutline.displayName = 'DocumentFavoriteOutline';
DocumentFavoriteOutline.inheritAttrs = false;
export default DocumentFavoriteOutline;