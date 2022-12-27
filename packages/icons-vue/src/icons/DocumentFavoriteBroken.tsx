// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentFavoriteBrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentFavoriteBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentFavoriteBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentFavoriteBroken: DocumentFavoriteBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentFavoriteBrokenSvg}></AntdIcon>;
};

DocumentFavoriteBroken.displayName = 'DocumentFavoriteBroken';
DocumentFavoriteBroken.inheritAttrs = false;
export default DocumentFavoriteBroken;