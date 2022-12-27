// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentSketchLinearSvg from '@ant-design/icons-svg/lib/asn/DocumentSketchLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentSketchLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentSketchLinear: DocumentSketchLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentSketchLinearSvg}></AntdIcon>;
};

DocumentSketchLinear.displayName = 'DocumentSketchLinear';
DocumentSketchLinear.inheritAttrs = false;
export default DocumentSketchLinear;