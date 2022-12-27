// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentFavoriteBoldSvg from '@ant-design/icons-svg/lib/asn/DocumentFavoriteBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentFavoriteBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentFavoriteBold: DocumentFavoriteBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentFavoriteBoldSvg}></AntdIcon>;
};

DocumentFavoriteBold.displayName = 'DocumentFavoriteBold';
DocumentFavoriteBold.inheritAttrs = false;
export default DocumentFavoriteBold;