// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentLikeBrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentLikeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentLikeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentLikeBroken: DocumentLikeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentLikeBrokenSvg}></AntdIcon>;
};

DocumentLikeBroken.displayName = 'DocumentLikeBroken';
DocumentLikeBroken.inheritAttrs = false;
export default DocumentLikeBroken;