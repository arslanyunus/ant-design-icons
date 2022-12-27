// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentLikeBoldSvg from '@ant-design/icons-svg/lib/asn/DocumentLikeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentLikeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentLikeBold: DocumentLikeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentLikeBoldSvg}></AntdIcon>;
};

DocumentLikeBold.displayName = 'DocumentLikeBold';
DocumentLikeBold.inheritAttrs = false;
export default DocumentLikeBold;