// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentLikeLinearSvg from '@ant-design/icons-svg/lib/asn/DocumentLikeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentLikeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentLikeLinear: DocumentLikeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentLikeLinearSvg}></AntdIcon>;
};

DocumentLikeLinear.displayName = 'DocumentLikeLinear';
DocumentLikeLinear.inheritAttrs = false;
export default DocumentLikeLinear;