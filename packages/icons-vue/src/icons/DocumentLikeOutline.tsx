// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentLikeOutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentLikeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentLikeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentLikeOutline: DocumentLikeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentLikeOutlineSvg}></AntdIcon>;
};

DocumentLikeOutline.displayName = 'DocumentLikeOutline';
DocumentLikeOutline.inheritAttrs = false;
export default DocumentLikeOutline;