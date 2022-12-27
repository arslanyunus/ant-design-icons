// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentSketchBrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentSketchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentSketchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentSketchBroken: DocumentSketchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentSketchBrokenSvg}></AntdIcon>;
};

DocumentSketchBroken.displayName = 'DocumentSketchBroken';
DocumentSketchBroken.inheritAttrs = false;
export default DocumentSketchBroken;