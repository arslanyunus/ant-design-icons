// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentSketchBoldSvg from '@ant-design/icons-svg/lib/asn/DocumentSketchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentSketchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentSketchBold: DocumentSketchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentSketchBoldSvg}></AntdIcon>;
};

DocumentSketchBold.displayName = 'DocumentSketchBold';
DocumentSketchBold.inheritAttrs = false;
export default DocumentSketchBold;