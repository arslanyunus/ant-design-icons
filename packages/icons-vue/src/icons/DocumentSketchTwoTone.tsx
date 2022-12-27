// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentSketchTwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentSketchTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentSketchTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentSketchTwoTone: DocumentSketchTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentSketchTwoToneSvg}></AntdIcon>;
};

DocumentSketchTwoTone.displayName = 'DocumentSketchTwoTone';
DocumentSketchTwoTone.inheritAttrs = false;
export default DocumentSketchTwoTone;