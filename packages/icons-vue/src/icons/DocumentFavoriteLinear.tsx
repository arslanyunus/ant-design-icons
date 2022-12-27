// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentFavoriteLinearSvg from '@ant-design/icons-svg/lib/asn/DocumentFavoriteLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentFavoriteLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentFavoriteLinear: DocumentFavoriteLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentFavoriteLinearSvg}></AntdIcon>;
};

DocumentFavoriteLinear.displayName = 'DocumentFavoriteLinear';
DocumentFavoriteLinear.inheritAttrs = false;
export default DocumentFavoriteLinear;