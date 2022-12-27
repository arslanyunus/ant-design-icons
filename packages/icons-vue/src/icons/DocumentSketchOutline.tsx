// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentSketchOutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentSketchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentSketchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentSketchOutline: DocumentSketchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentSketchOutlineSvg}></AntdIcon>;
};

DocumentSketchOutline.displayName = 'DocumentSketchOutline';
DocumentSketchOutline.inheritAttrs = false;
export default DocumentSketchOutline;